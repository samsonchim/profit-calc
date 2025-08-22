export interface Wallet {
  id: string;
  name: string;
  address: string;
  balance: string;
  currency: string;
  tokenAddress?: string;
}

export const initialize = async (endpoint: string, apiCode: string) => {
  // Mock initialization
  console.log('Initializing CYBAVO SDK with', endpoint, apiCode);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};

export const createWallet = async (currency: string, name: string): Promise<{ wallet: Wallet }> => {
  // Mock createWallet
  console.log(`Creating ${currency} wallet with name ${name}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    wallet: {
      id: Math.random().toString(),
      name,
      address: `mock-${currency.toLowerCase()}-address-${Math.random()}`,
      balance: '0',
      currency,
    },
  };
};

export const getWallets = async (): Promise<{ wallets: Wallet[] }> => {
  // Mock getWallets
  console.log('Getting wallets');
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    wallets: [
      { id: '1', name: 'USD Wallet', address: 'mock-usd-address', balance: '1000.00', currency: 'USD' },
      { id: '2', name: 'Bitcoin Wallet', address: 'mock-btc-address', balance: '0.5', currency: 'BTC' },
      { id: '3', name: 'Ethereum Wallet', address: 'mock-eth-address', balance: '10', currency: 'ETH' },
    ],
  };
};
