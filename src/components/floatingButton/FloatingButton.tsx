import { ReactNode } from "react";
import "./floatingButton.css";

interface FloatingButtonProps {
  children: ReactNode;
  iconSrc: string;
}

export default function FloatingButton({
  children,
  iconSrc,
}: FloatingButtonProps) {
  return (
    <button type="button" className="floating-button">
      <div className="floating-button-box">
        <p>{children}</p>
        <img src={iconSrc} alt="floating-icon" />
      </div>
    </button>
  );
}
