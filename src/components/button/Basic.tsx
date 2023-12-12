import { MainButton } from "./ButtonStyles";

interface ButtonProps {
  size: string;
  label: string;
  readonly onClick?: () => void;
}

export default function Button({ size, label, onClick }: ButtonProps) {
  return (
    <MainButton size={size} onClick={onClick}>
      {label}
    </MainButton>
  );
}
