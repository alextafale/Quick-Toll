import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Alert, TextInput} from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.inputscontainer}>
                    <TextInput style={styles.inputs} placeholder='Nombre' value='nombre' onChangeText={setNombre}/>
                    <TextInput placeholder='Correo' value='correo'/>
                    <TextInput placeholder='Contraseña' value='contraseña' secureTextEntry={true}/>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Usuario registrado exitosamente')}>
                        <Text style={styles.buttontext}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default SignUpScreen;