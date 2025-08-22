import { Text, View, TextInput, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { login as loginService } from '../../services/auth';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await loginService(email, password);
    if (response.success) {
      login();
      router.replace('/');
    } else {
      // Handle login failure
      alert('Login failed');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Sign Up" onPress={() => router.push('/auth/signup')} />
    </View>
  );
}
