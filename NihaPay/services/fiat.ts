export const getFiatBalance = async (currency) => {
  // Mock getFiatBalance.
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { balance: 1000, currency };
};

export const spendFiat = async (amount, currency) => {
  // Mock spendFiat.
  console.log(`Spending ${amount} ${currency}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, transactionId: 'mock-fiat-tx-id' };
};
