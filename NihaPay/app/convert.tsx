import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getConversionRate, convertCryptoToFiat } from '../services/conversion';

export default function ConvertScreen() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleGetRate = async () => {
    const { rate } = await getConversionRate(fromCurrency, toCurrency);
    setRate(rate);
  };

  const handleConvert = async () => {
    const { fiatAmount } = await convertCryptoToFiat(fromCurrency, toCurrency, parseFloat(amount));
    setConvertedAmount(fiatAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convert Crypto to Fiat</Text>
      <TextInput
        style={styles.input}
        placeholder="From Currency (e.g., BTC)"
        value={fromCurrency}
        onChangeText={setFromCurrency}
      />
      <TextInput
        style={styles.input}
        placeholder="To Currency (e.g., USD)"
        value={toCurrency}
        onChangeText={setToCurrency}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Get Rate" onPress={handleGetRate} />
      {rate > 0 && <Text>Rate: 1 {fromCurrency} = {rate} {toCurrency}</Text>}
      <Button title="Convert" onPress={handleConvert} />
      {convertedAmount > 0 && <Text>Converted Amount: {convertedAmount} {toCurrency}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
