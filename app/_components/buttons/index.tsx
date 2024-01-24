import { ButtonHTMLAttributes, ReactNode } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = Object.assign(PrimaryButton, {
  Secondary: SecondaryButton,
});
