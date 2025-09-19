import { View, Text, SafeAreaView, StyleSheet, Platform, ImageBackground,StatusBar } from 'react-native';
import { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/LOGO.jpg')}
          style={styles.imageBackground}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageBackground: {
    flex: 1
  },
});

export default SplashScreen;