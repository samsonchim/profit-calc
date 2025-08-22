import { Text, View, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { getWallets, Wallet } from '../services/cybavo';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import Card from '../components/Card';

export default function HomeScreen() {
  const { logout } = useAuth();
  const router = useRouter();
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWallets = async () => {
      const { wallets } = await getWallets();
      setWallets(wallets);
      setIsLoading(false);
    };
    fetchWallets();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wallets</Text>
      <FlatList
        data={wallets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.walletItem}>
              <Text style={styles.walletName}>{item.name}</Text>
              <Text style={styles.walletBalance}>{item.balance} {item.currency}</Text>
            </View>
          </Card>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Funds" onPress={() => router.push('/add-funds')} />
        <Button title="Convert" onPress={() => router.push('/convert')} />
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  walletItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletName: {
    fontSize: 18,
  },
  walletBalance: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
