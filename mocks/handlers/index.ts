import { loginHandlers } from "./api/login";
import { forgotPasswordHandlers } from "./api/forgotPassword";
import { addNoteHandlers } from "./api/addNote";

export const handlers = [
  ...loginHandlers,
  ...forgotPasswordHandlers,
  ...addNoteHandlers,
];
