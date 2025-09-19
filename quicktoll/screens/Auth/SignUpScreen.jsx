import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, TextInput, SafeAreaView } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);
    const [secureEntryConfirm, setSecureEntryConfirm] = useState(true);

    return (
        <SafeAreaView style={styles.safeStyle}>
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                
                <View style={styles.containers}>
                    {/* Campo Nombre */}
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Nombre" 
                            placeholderTextColor="#9BB0CB"
                            value={nombre} 
                            onChangeText={setNombre}
                        />
                    </View>

                    {/* Campo Correo */}
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Correo" 
                            placeholderTextColor="#9BB0CB"
                            value={correo} 
                            onChangeText={setCorreo}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Campo Contraseña */}
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Contraseña" 
                            placeholderTextColor="#9BB0CB"
                            value={contraseña} 
                            secureTextEntry={secureEntry} 
                            onChangeText={setContraseña}
                        />
                        <TouchableOpacity 
                            style={styles.eyeIcon} 
                            onPress={() => setSecureEntry(!secureEntry)}
                        >
                            <Ionicons 
                                name={secureEntry ? "eye-off-outline" : "eye-outline"} 
                                size={20} 
                                color="#4C759D" 
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Campo Confirmar Contraseña */}
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Confirmar Contraseña" 
                            placeholderTextColor="#9BB0CB"
                            value={confirmarContraseña} 
                            secureTextEntry={secureEntryConfirm} 
                            onChangeText={setConfirmarContraseña}
                        />
                        <TouchableOpacity 
                            style={styles.eyeIcon} 
                            onPress={() => setSecureEntryConfirm(!secureEntryConfirm)}
                        >
                            <Ionicons 
                                name={secureEntryConfirm ? "eye-off-outline" : "eye-outline"} 
                                size={20} 
                                color="#4C759D" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containers}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => { 
                            Alert.alert('Usuario registrado exitosamente'); 
                            navigation.replace('HomeScreen'); 
                        }}
                    >
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textLink} onPress={() => navigation.replace('LogInScreen')}>
                    ¿Ya tienes cuenta?, Inicia sesión
                </Text>
                
                <NavigationBar/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    containers: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        position: 'relative',
        marginVertical: 10,
    },
    inputs: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
        paddingRight: 45, // Espacio para el icono del ojo
        backgroundColor: '#E7EDF4',
        borderRadius: 7,
        color: '#4C759D',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#D8E2EE',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 30,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        padding: 5,
    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor: '#3D99F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 20,
        shadowColor: '#3D99F5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    textLink: {
        textDecorationLine: 'underline',
        color: "#4E769E",
        marginTop: 20,
        marginBottom: 20,
        fontSize: 14,
    },
});

export default SignUpScreen;