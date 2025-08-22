import { getConversionRate, convertCryptoToFiat } from '../../services/conversion';

describe('Conversion Service', () => {
  it('should get conversion rate', async () => {
    const response = await getConversionRate('BTC', 'USD');
    expect(response.rate).toBe(50000);
  });

  it('should convert crypto to fiat', async () => {
    const response = await convertCryptoToFiat('BTC', 'USD', 0.1);
    expect(response.success).toBe(true);
    expect(response.fiatAmount).toBe(5000);
  });
});
