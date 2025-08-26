import { ContactFormData } from '../types';

// Google Sheets integration (direct URL, no env required)
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxR4b0e7e3uDRM8PO9XQpLgK40zB98qXJcDT9eMTjB8z0U6JF4GNEhGjnpft2ZA0QAh/exec';

export const submitToGoogleSheets = async (data: ContactFormData): Promise<boolean> => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: formData,
      // Apps Script handles CORS for published web apps; this ensures cookies aren't sent
      credentials: 'omit'
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

// Mock function for demonstration (remove when implementing real Google Sheets)
export const mockSubmitToGoogleSheets = async (data: ContactFormData): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submission (mock):', data);
      resolve(true);
    }, 2000);
  });
};