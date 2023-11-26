import React from "react";
import "./dialogFolderList.css";
import { ChildrenProps } from "../../../../types/types";

export default function DialogFolderList({ children }: ChildrenProps) {
  return <div className="dialog-folder-list">{children}</div>;
}
