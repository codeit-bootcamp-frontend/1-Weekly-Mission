import { ButtonProps } from ".";

const PrimaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="to-blue h-full w-full rounded-md bg-gradient-to-r from-primary text-14 font-600 text-white tablet:text-18">
      {children}
    </button>
  );
};

export default PrimaryButton;
