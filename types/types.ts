import { Control, FieldValues } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<FieldValues>;
}
