import { Paystack } from 'paystack-react-native';

export const initializePaystack = async () => {
  // In a real app, you'd fetch the public key from your backend
  const publicKey = 'pk_test_...'; // dummy key
  Paystack.init({ publicKey });
};

export const chargeCard = async (cardNumber: string, expiryMonth: string, expiryYear: string, cvv: string, email: string, amount: number) => {
  // In a real app, you'd handle the charge on your backend
  console.log('Charging card');
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, reference: 'mock-paystack-ref' };
};
