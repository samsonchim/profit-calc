import { getFiatBalance, spendFiat } from '../../services/fiat';

describe('Fiat Service', () => {
  it('should get fiat balance', async () => {
    const response = await getFiatBalance('USD');
    expect(response.balance).toBe(1000);
    expect(response.currency).toBe('USD');
  });

  it('should spend fiat', async () => {
    const response = await spendFiat(100, 'USD');
    expect(response.success).toBe(true);
    expect(response.transactionId).toBe('mock-fiat-tx-id');
  });
});
