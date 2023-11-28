import React from "react";
import "./dialogLink.css";
import { ChildrenProps } from "../../../../types/types";

export default function DialogLink({ children }: ChildrenProps) {
  return <p className="dialog-link">{children}</p>;
}
