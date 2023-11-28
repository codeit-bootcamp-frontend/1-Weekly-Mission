import { ChildrenProps } from "../../../../types/types";
import "./dialogTitle.css";

export default function DialogTitle({ children }: ChildrenProps) {
  return <h1 className="dialog-title">{children}</h1>;
}
