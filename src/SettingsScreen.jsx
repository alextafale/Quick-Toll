import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
 const SettingsScreen  = ({navigation}) => {
    return (
        <SafeAreaView >
        <View style={styles.container}>
          <View style={firstcontainer}>
            <View style={styles.subcontainers}>
                <Text style={styles.account}>Cuenta</Text>
            <View/>
                <Text style={styles.title}>Información de la cuenta</Text>
                <Text style={styles.description}>Maneja tu información personal</Text>
            </View>
            <View style={styles.subcontainers}>
                <Text style={styles.title}>Métodos de pago</Text>
                <Text style={styles.description}>Administra tus métodos de pago</Text>
            </View>
            <View style={styles.subcontainers}>
                <Text style={styles.title}>Vehiculos</Text>
                <Text style={styles.description}>Administra la información de tus vehículos</Text>
            </View>
            </View>
        </View>
      </SafeAreaView>
    );
}
const styles  = StyleSheet.create({

});
export default SettingsScreen;