import { setApiKey, getApiKey, resetApiKey } from './keychain';

const AUTH_SERVICE = 'com.nihapay.auth';

export const login = async (email, password) => {
  // Mock login. In a real app, you'd call an API.
  console.log('Logging in with', email, password);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const token = 'mock-token';
  await setApiKey(AUTH_SERVICE, token);
  return { success: true, token };
};

export const signup = async (name, email, password) => {
  // Mock signup.
  console.log('Signing up with', name, email, password);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const token = 'mock-token';
  await setApiKey(AUTH_SERVICE, token);
  return { success: true, token };
};

export const getToken = async () => {
  return await getApiKey(AUTH_SERVICE);
};

export const logout = async () => {
  await resetApiKey(AUTH_SERVICE);
};
