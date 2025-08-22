export const getConversionRate = async (from, to) => {
  // Mock getConversionRate.
  console.log(`Getting conversion rate from ${from} to ${to}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (from === 'BTC' && to === 'USD') {
    return { rate: 50000 };
  }
  if (from === 'ETH' && to === 'USD') {
    return { rate: 3000 };
  }
  return { rate: 0 };
};

export const convertCryptoToFiat = async (from, to, amount) => {
  // Mock convertCryptoToFiat.
  console.log(`Converting ${amount} ${from} to ${to}`);
  const { rate } = await getConversionRate(from, to);
  const fiatAmount = amount * rate;
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, fiatAmount };
};
