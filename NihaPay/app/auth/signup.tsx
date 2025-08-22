import { Text, View, TextInput, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { signup as signupService } from '../../services/auth';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const { login } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const response = await signupService(name, email, password);
    if (response.success) {
      login();
      router.replace('/');
    } else {
      // Handle signup failure
      alert('Signup failed');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign Up</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
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
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => router.push('/auth/login')} />
    </View>
  );
}
