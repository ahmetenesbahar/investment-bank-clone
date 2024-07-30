import { loginHandlers } from "./api/login";
import { forgotPasswordHandlers } from "./api/forgotPassword";

export const handlers = [...loginHandlers, ...forgotPasswordHandlers];
