import { title } from 'process';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';
export const SplashScreen = ({navigation}) => {
        useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('LogInScreen');
        }, 3500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView >
            <View style={styles.overlay}>
              <Text style={styles.title}>QuickToll</Text>
            </View>
          
        </SafeAreaView>
    );
}
const styles  = StyleSheet.create({
overlay:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
},
title:{
    fontSize: 25,
    color: 'black'
}
});