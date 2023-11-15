import * as CryptoJS from 'crypto-js';

const secretKey = '12345';
export const encrypt = (text: string): string => {
  const encryptedText = CryptoJS.AES.encrypt(text, secretKey).toString();
  return encryptedText;
};

export const decrypt = (encryptedText: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedText;
};
