export interface LoginRequestBody {
  customerNumber: number;
  password: number;
}

export interface LoginResponse {
  message: string;
  token?: string;
}
