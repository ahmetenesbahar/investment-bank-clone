export interface LoginRequestBody {
  customerNumber: number;
  password: number;
}

export interface LoginResponse {
  message: string;
  token?: string;
}

export interface ForgotPasswordRequestBody {
  customerNumber: number;
  phoneNumber: number;
}

export interface ForgotPasswordResponse {
  message: string;
}
