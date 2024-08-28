import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // Show splash screen for 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/FMLogonew.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {


    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width:50,
    height: 150,
  },
});
