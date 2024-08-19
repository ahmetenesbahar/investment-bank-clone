import { loginHandlers } from "./api/login";
import { forgotPasswordHandlers } from "./api/forgotPassword";
import { addNoteHandlers } from "./api/addNote";
import { editNoteHandlers } from "./api/editNote";

export const handlers = [
  ...loginHandlers,
  ...forgotPasswordHandlers,
  ...addNoteHandlers,
  ...editNoteHandlers,
];
