import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image} from 'react-native';
export const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView >
          <View style={styles.overlay}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
          </View>
        </SafeAreaView>
    );
}
const styles  = StyleSheet.create({

});