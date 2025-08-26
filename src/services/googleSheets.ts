import { ContactFormData } from '../types';

// Google Sheets integration
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

export const submitToGoogleSheets = async (data: ContactFormData): Promise<boolean> => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: formData,
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