import React from "react";
import HeaderButton from "../button/HeaderButton";
import { FolderContentsProps } from "@/api/share";
import Folder from "../folder/Folder";

export default function Header({ data }: { data?: FolderContentsProps }) {
  if (data) {
    return <Folder data={data} />;
  }
  return <HeaderButton />;
}
