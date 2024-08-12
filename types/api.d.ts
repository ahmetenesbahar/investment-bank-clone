// types/api.ts

export interface LoginRequestBody {
  customerNumber: number;
  password: number;
}

export interface LoginResponse {
  message: string;
  token?: string;
  user?: User;
}

export interface ForgotPasswordRequestBody {
  customerNumber: number;
  phoneNumber: number;
  commercialNumber?: number | null;
  captcha: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface User {
  customerNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  accounts: {
    accountType: string;
    currency: string;
    iban: string;
    balance: number;
  }[];
}

export interface FormData {
  title: string;
  description: string;
  displayDate: string;
  recurrence: string;
  lastViewedDate: string;
}

export interface AddNoteResponse {
  message: string;
  note: FormData;
}
