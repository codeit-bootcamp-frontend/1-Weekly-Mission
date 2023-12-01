import { Button } from "src/components/Nav/SignButton.styled";

interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

function SignButton({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default SignButton;
