import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput, SafeAreaView } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { Ionicons } from '@expo/vector-icons';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Backend/Firebase/FirebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
WebBrowser.maybeCompleteAuthSession();

const useProxy = true;
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const SignUpScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);
    const [secureEntryConfirm, setSecureEntryConfirm] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSignUpWithGoogle = async () => {
        try {
            setLoading(true);
            
            // Configurar la solicitud de autenticación
            const request = new AuthSession.AuthRequest({
                clientId: '394613431143-vbreqlodokbfk63lr68u1cnpj9vs5elb.apps.googleusercontent.com',
                scopes: ['openid', 'profile', 'email'],
                redirectUri: redirectUri,
            });

            // Iniciar el flujo de autenticación
            const result = await AuthSession.startAsync({
                authUrl: request.url,
                returnUrl: redirectUri,
            });

            if (result.type === 'success') {
                const { id_token } = result.params;
                
                if (id_token) {
                    // Crear credencial de Firebase con el token de Google
                    const credential = GoogleAuthProvider.credential(id_token);
                    await signInWithCredential(auth, credential);
                    
                    Alert.alert('Éxito', 'Registro con Google exitoso');
                    navigation.replace('MainApp', { screen: 'HomeScreen' });
                } else {
                    throw new Error('No se recibió token de Google');
                }
            } else {
                throw new Error('La autenticación fue cancelada');
            }
        } catch (error) {
            console.error("Error signing up with Google:", error);
            Alert.alert('Error', 'No se pudo registrar con Google: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignUp = async () => {
        if (!nombre || !correo || !contraseña || !confirmarContraseña) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        if (contraseña !== confirmarContraseña) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        if (contraseña.length < 6) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
            return;
        }

        try {
            setLoading(true);
            
            // Crear usuario con email y contraseña
            const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
            
            // Actualizar perfil con el nombre
            await updateProfile(userCredential.user, {
                displayName: nombre
            });

            Alert.alert('Éxito', 'Usuario registrado exitosamente');
            navigation.replace('MainApp', { screen: 'HomeScreen' });
        } catch (error) {
            console.error("Error signing up:", error);
            let errorMessage = 'Error al registrar usuario';
            
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Este correo ya está registrado';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Correo electrónico inválido';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'La contraseña es demasiado débil';
                    break;
                default:
                    errorMessage = error.message;
            }
            
            Alert.alert('Error', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeStyle}>
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                
                <View style={styles.containers}>
                    {/* Campos de nombre, correo, contraseña (igual que antes) */}
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Nombre" 
                            placeholderTextColor="#9BB0CB"
                            value={nombre} 
                            onChangeText={setNombre}
                        />
                    </View>

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
                        style={[styles.button, loading && styles.buttonDisabled]} 
                        onPress={handleEmailSignUp}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Registrando...' : 'Registrarse'}
                        </Text>
                    </TouchableOpacity>

                    {/* Botón de Google actualizado */}
                    <TouchableOpacity 
                        style={[styles.googleButton, loading && styles.buttonDisabled]}
                        onPress={handleSignUpWithGoogle}
                        disabled={loading}
                    >
                        <Ionicons name="logo-google" size={20} color="#DB4437" />
                        <Text style={styles.googleButtonText}>
                            {loading ? 'Registrando...' : 'Registrarse con Google'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textLink} onPress={() => navigation.replace('LogInScreen')}>
                    ¿Ya tienes cuenta?, Inicia sesión
                </Text>
                
                <NavigationBar/>
            </View>
        </SafeAreaView>
    );
};

// Tus estilos existentes se mantienen igual...
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
        paddingRight: 45,
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
    googleButton: {
        width: "90%",
        height: 50,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#D8E2EE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    googleButtonText: {
        color: '#757575',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    buttonDisabled: {
        opacity: 0.6,
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