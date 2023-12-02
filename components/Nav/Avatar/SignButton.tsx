import { Button } from "@/components/Nav/Avatar/SignButton.styled";

interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

export default function SignButton({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}
