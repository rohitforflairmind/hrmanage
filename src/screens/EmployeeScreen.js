import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmployeeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Employee Dashboard</Text>
      {/* Add other employee-related components here */}
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
