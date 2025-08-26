export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}