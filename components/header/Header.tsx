import React from "react";
import HeaderButton from "../button/HeaderButton";
import { FolderContents } from "@/api/share";
import Folder from "../folder/Folder";
type HeaderProps = {
  data?: { folder: FolderContents };
};

export default function Header({ data }: HeaderProps) {
  if (data) {
    return <Folder data={data} />;
  }
  return <HeaderButton />;
}
