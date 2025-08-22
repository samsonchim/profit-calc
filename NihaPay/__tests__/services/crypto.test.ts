import { getBalances, sendTransaction, getReceiveAddress } from '../../services/crypto';

describe('Crypto Service', () => {
  it('should get balances', async () => {
    const balances = await getBalances();
    expect(balances.BTC.balance).toBe(0.5);
    expect(balances.ETH.balance).toBe(10);
  });

  it('should send a transaction', async () => {
    const response = await sendTransaction('BTC', 'some-address', 0.1);
    expect(response.success).toBe(true);
    expect(response.transactionId).toBe('mock-tx-id');
  });

  it('should get a receive address', async () => {
    const response = await getReceiveAddress('BTC');
    expect(response.address).toBe('mock-btc-address');
  });
});
