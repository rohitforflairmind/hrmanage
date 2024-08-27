import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
import ApiService from '../services/ApiService';
import LoadingScreen from '../components/LoadingScreen';

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const apiService = new ApiService();
      const response = await apiService.post('login', { username, password });
      dispatch(setUser(response.data));
      navigation.replace('Home');
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
