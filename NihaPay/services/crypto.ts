export const getBalances = async () => {
  // Mock getBalances.
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    BTC: { balance: 0.5 },
    ETH: { balance: 10 },
  };
};

export const sendTransaction = async (currency, address, amount) => {
  // Mock sendTransaction.
  console.log(`Sending ${amount} ${currency} to ${address}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, transactionId: 'mock-tx-id' };
};

export const getReceiveAddress = async (currency) => {
  // Mock getReceiveAddress.
  console.log(`Getting receive address for ${currency}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { address: `mock-${currency.toLowerCase()}-address` };
};
