import { MouseEvent, ReactNode } from "react";

interface ToggleButtonProps {
  toggle: boolean;
  onIcon: ReactNode;
  offIcon: ReactNode;
  onToggle: (e: MouseEvent<HTMLDivElement>) => Promise<void>;
}

export default function ToggleButton({ toggle, onToggle, onIcon, offIcon }: ToggleButtonProps) {
  return <div onClick={onToggle}>{toggle ? onIcon : offIcon}</div>;
}
