import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, 
  Keyboard, Image, Animated, Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Backend/Firebase/FirebaseConfig';

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = "3394613431143-vbreqlodokbfk63lr68u1cnpj9vs5elb.apps.googleusercontent.com"; 

export default function LogInScreen({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: CLIENT_ID, // Expo Client ID
    webClientId: CLIENT_ID,  // Web Client ID
    iosClientId: CLIENT_ID,  // iOS Client ID
    androidClientId: CLIENT_ID, // Android Client ID
    redirectUri: makeRedirectUri({
      native: "com.app_pf:/oauthredirect", // App.json -> scheme
    }),
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  // Efecto para manejar la respuesta de Google
  useEffect(() => {
    const logInWithGoogle = async () => {
      try {
        if (response?.type === "success") {
          setGoogleLoading(true);
          const { authentication } = response;
          if (authentication?.accessToken) {
            const credential = GoogleAuthProvider.credential(null, authentication.accessToken);
            await signInWithCredential(auth, credential);

            Alert.alert("Éxito", "Inicio de sesión con Google exitoso");
            navigation.navigate("MainApp", { screen: "HomeScreen" });
          }
        }
      } catch (error) {
        console.error("Error con Google Sign-In:", error);
        Alert.alert("Error", "No se pudo iniciar sesión con Google");
      } finally {
        setGoogleLoading(false);
      }
    };

    logInWithGoogle();
  }, [response]);

  // Login con correo y contraseña
  const handleLogin = async () => {
    if (!correo || !contraseña) {
      Alert.alert('Error', 'Por favor ingresa correo y contraseña');
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, correo, contraseña);
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
      navigation.navigate('MainApp', { screen: 'HomeScreen' });
    } catch (error) {
      console.error("Error logging in:", error);
      let errorMessage = 'Error al iniciar sesión';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Correo electrónico inválido';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Esta cuenta ha sido deshabilitada';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Usuario no encontrado';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Contraseña incorrecta';
          break;
        default:
          errorMessage = error.message;
      }
      
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeStyle}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../../assets/image.png')} 
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.brandName}>QuickToll</Text>
              <Text style={styles.tagline}>Viaja sin preocupaciones</Text>
            </View>
            
            <Text style={styles.welcomeText}>Bienvenido</Text>
            <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>
            
            <View style={styles.inputsContainer}>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color="#4C759D" style={styles.inputIcon} />
                <TextInput
                  placeholder="Correo electrónico"
                  placeholderTextColor="#9BB0CB"
                  value={correo}
                  style={styles.inputs}
                  onChangeText={setCorreo}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={!isLoading}
                />
              </View>
              
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#4C759D" style={styles.inputIcon} />
                <TextInput
                  placeholder="Contraseña"
                  placeholderTextColor="#9BB0CB"
                  value={contraseña}
                  style={styles.inputs}
                  secureTextEntry={secureEntry}
                  onChangeText={setContraseña}
                  editable={!isLoading}
                />
                <TouchableOpacity 
                  style={styles.eyeIcon} 
                  onPress={() => setSecureEntry(!secureEntry)}
                  disabled={isLoading}
                >
                  <Ionicons 
                    name={secureEntry ? "eye-off-outline" : "eye-outline"} 
                    size={20} 
                    color="#4C759D" 
                  />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                onPress={handleLogin} 
                style={[styles.button, isLoading && styles.buttonDisabled]}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Ionicons name="refresh" size={24} color="white" style={styles.loadingIcon} />
                ) : (
                  <Text style={styles.buttonText}>Iniciar Sesión</Text>
                )}
              </TouchableOpacity>
            </View>
            
            <View style={styles.separator}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>o</Text>
              <View style={styles.separatorLine} />
            </View>
            
            <View style={styles.socialLoginContainer}>
              <TouchableOpacity 
                style={[styles.socialButton, (isLoading || googleLoading) && styles.buttonDisabled]} 
                onPress={() => promptAsync()} // 👈 corregido
                disabled={isLoading || googleLoading}
              >
                {googleLoading ? (
                  <Ionicons name="refresh" size={20} color="#DB4437" />
                ) : (
                  <>
                    <Ionicons name="logo-google" size={20} color="#DB4437" />
                    <Text style={styles.socialButtonText}>Google</Text>
                  </>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.socialButton, isLoading && styles.buttonDisabled]}
                disabled={isLoading}
                onPress={() => Alert.alert('Facebook', 'Próximamente disponible')}
              >
                <Ionicons name="logo-facebook" size={20} color="#4267B2" />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>¿No tienes cuenta? </Text>
              <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
                <Text style={styles.signupLink}>Regístrate</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeStyle: { flex: 1, backgroundColor: '#fff' },
  keyboardView: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 24 },
  logoContainer: { alignItems: 'center', marginBottom: 24 },
  logo: { width: 80, height: 80, marginBottom: 8 },
  brandName: { fontSize: 28, fontWeight: 'bold', color: '#3D99F5', marginBottom: 4 },
  tagline: { fontSize: 14, color: '#7B8794' },
  welcomeText: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#6B7280', marginBottom: 32 },
  inputsContainer: { width: "100%", alignItems: "center", marginBottom: 24 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', width: "100%", position: 'relative', marginBottom: 16 },
  inputs: { flex: 1, height: 56, paddingHorizontal: 48, backgroundColor: '#F8FAFC', borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', color: '#1F2937', fontSize: 16 },
  inputIcon: { position: 'absolute', left: 16, zIndex: 1 },
  eyeIcon: { position: 'absolute', right: 16 },
  forgotPassword: { marginTop: 8 },
  forgotPasswordText: { color: '#3D99F5', fontSize: 14, fontWeight: '500' },
  buttonContainer: { width: "100%", alignItems: "center", marginBottom: 24 },
  button: { width: '100%', height: 56, backgroundColor: '#3D99F5', borderRadius: 12, alignItems: 'center', justifyContent: 'center', shadowColor: '#3D99F5', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  buttonDisabled: { opacity: 0.7 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  loadingIcon: { transform: [{ rotate: '360deg' }] },
  separator: { flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 24 },
  separatorLine: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  separatorText: { marginHorizontal: 16, color: '#6B7280', fontSize: 14 },
  socialLoginContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 32 },
  socialButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '48%', height: 48, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' },
  socialButtonText: { marginLeft: 8, color: '#374151', fontWeight: '500' },
  signupContainer: { flexDirection: 'row', justifyContent: 'center' },
  signupText: { color: '#6B7280' },
  signupLink: { color: '#3D99F5', fontWeight: '600' }
});
