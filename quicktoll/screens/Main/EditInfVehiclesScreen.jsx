import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditInfVehiclesScreen = ({ navigation, route }) => {
    // Datos del vehículo que se reciben por parámetros o estado inicial
    const [vehicle, setVehicle] = useState(route.params?.vehicle || {
        id: '',
        licensePlate: '',
        model: '',
        color: '',
        year: '',
        tagNumber: ''
    });

    const handleSave = () => {
        // Validación básica
        if (!vehicle.licensePlate || !vehicle.model) {
            alert('Por favor completa los campos obligatorios');
            return;
        }

        // Aquí iría la lógica para guardar los cambios
        console.log('Vehículo actualizado:', vehicle);
        
        // Navegar de regreso con los datos actualizados
        navigation.navigate('VehicleScreen', { updatedVehicle: vehicle });
    };

    const handleDelete = () => {
        // Mostrar confirmación antes de eliminar
        alert('¿Estás seguro de que quieres eliminar este vehículo?');
        // Lógica para eliminar el vehículo
        navigation.navigate('VehicleScreen', { deletedVehicleId: vehicle.id });
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoid}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Editar Vehículo</Text>
                        <View style={styles.placeholder} />
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Placa del vehículo *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej: ABC-123"
                                value={vehicle.licensePlate}
                                onChangeText={(text) => setVehicle({...vehicle, licensePlate: text})}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Modelo *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej: Toyota Corolla"
                                value={vehicle.model}
                                onChangeText={(text) => setVehicle({...vehicle, model: text})}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Color</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej: Rojo"
                                value={vehicle.color}
                                onChangeText={(text) => setVehicle({...vehicle, color: text})}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Año</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej: 2022"
                                keyboardType="numeric"
                                value={vehicle.year}
                                onChangeText={(text) => setVehicle({...vehicle, year: text})}
                                maxLength={4}
                            />
                        </View>


                    </View>

                    <View style={styles.actionsContainer}>
                        <TouchableOpacity 
                            style={styles.saveButton}
                            onPress={handleSave}
                        >
                            <Ionicons name="save-outline" size={20} color="#fff" />
                            <Text style={styles.saveButtonText}>Guardar Cambios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.deleteButton}
                            onPress={handleDelete}
                        >
                            <Ionicons name="trash-outline" size={20} color="#fff" />
                            <Text style={styles.deleteButtonText}>Eliminar Vehículo</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.note}>* Campos obligatorios</Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardAvoid: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    backButton: {
        padding: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    placeholder: {
        width: 34,
    },
    formContainer: {
        marginBottom: 30,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    actionsContainer: {
        marginBottom: 20,
    },
    saveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        marginBottom: 15,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3B30',
        padding: 16,
        borderRadius: 8,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    note: {
        textAlign: 'center',
        color: '#666',
        fontSize: 14,
        fontStyle: 'italic',
    },
});

export default EditInfVehiclesScreen;