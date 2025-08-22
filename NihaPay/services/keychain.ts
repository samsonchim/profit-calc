import * as Keychain from 'react-native-keychain';

export const setApiKey = async (service: string, apiKey: string) => {
  await Keychain.setGenericPassword(service, apiKey, { service });
};

export const getApiKey = async (service: string) => {
  const credentials = await Keychain.getGenericPassword({ service });
  if (credentials) {
    return credentials.password;
  }
  return null;
};

export const resetApiKey = async (service: string) => {
  await Keychain.resetGenericPassword({ service });
};
