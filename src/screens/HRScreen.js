import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HRScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HR Dashboard</Text>
      {/* Add other HR-related components here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
