import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
export const LogInScreen = ({navigation}) => {
    return (
        <SafeAreaView >
          <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email"   value={correo}  style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} secureTextEntry= {true} />
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    );
}
const styles  = StyleSheet.create({

});