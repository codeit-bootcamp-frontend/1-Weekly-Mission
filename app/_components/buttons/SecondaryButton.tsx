import { ButtonProps } from ".";

const SecondaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="h-full w-full rounded-md bg-red text-14 font-600 text-white tablet:text-18">
      {children}
    </button>
  );
};

export default SecondaryButton;
