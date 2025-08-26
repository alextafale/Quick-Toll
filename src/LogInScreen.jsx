import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LogInScreen = ({navigation}) => {
  const [correo, setCorreo]= useState('');
  const [contraseña, setContraseña]= useState('');

  const handleLogin = async () => {
    //Aqui poner de intentar iniciar sesion
    //Se comunicara con el backend, de esta forma se dira si coinciden los datos
    //de hacerlo entrara al homeScreen o UserScreen
  };

    return (
        <SafeAreaView style={styles.safeStyle}>
          <View style={styles.container}>
            <Text style={styles.brandName}>QuickToll</Text>
            <Text style={styles.textBack}>Bienvenido</Text>
            <View style={styles.inputsContainer}>
                <TextInput placeholder="Email" value={correo}  style={styles.inputs} onChangeText={setCorreo} />
                <TextInput placeholder="Contraseña" value={contraseña} style={styles.inputs} secureTextEntry= {true} onChangeText={setContraseña} />
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() =>/* Reemplazar lo siguiente con el metodo handleLogin*/ navigation.replace('MainTabs')} style={styles.button}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            </View>
            <Button onPress={() => navigation.replace('Signup')} title="¿No tienes cuenta?, registrate" />
          </View>
        </SafeAreaView>
    );
}
const styles  = StyleSheet.create({
  safeStyle:{
    flex: 1,
    color:'#fff'
  },
  brandName:{
    marginBottom:"3%",
    fontSize:17
  },
  textLink:{
    textDecorationLine: 'underline',
    color:"#4E769E",
    marginBottom: "20%",
  },
  textBack:{
    fontSize:20,
    marginVertical:"3%"
  },
  inputs:{
    width:"90%",
    height:50,
    textAlign:'left',
    backgroundColor:'#E7EDF4',
    borderRadius:7,
    marginVertical:"3%",
    color:'#4C759D',
  },
  inputsContainer: {
    width: "100%",
    alignItems: "center"
  },
  container:{
    alignContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    backgroundColor:'#fff'
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    //marginTop: 20,
  },
  button:{
    width:"90%",
    height:50,
    backgroundColor:'#3D99F5',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:7,
    marginTop: "3%",
    marginBottom: "105%",
  },
  buttonText:{
    color:'white',
    //poner la familia del texto
  }
});

export default LogInScreen;