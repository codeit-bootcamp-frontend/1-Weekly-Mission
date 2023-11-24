import { Button } from "src/components/Nav/SignButton.styled";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

function SignButton({ children, onClick }: Props) {
  return (
    <Button href="." onClick={onClick}>
      {children}
    </Button>
  );
}

export default SignButton;
