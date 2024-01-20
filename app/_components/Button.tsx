import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="to-blue h-full w-full rounded-md bg-gradient-to-r from-primary text-14 font-600 text-white tablet:text-18">
      {children}
    </button>
  );
};

export default Button;
