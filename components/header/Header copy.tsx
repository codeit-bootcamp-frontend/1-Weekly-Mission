import React from "react";

import HeaderButton from "../button/HeaderButton";
import { FolderContents } from "@/api/share";
import Folder from "../folder/Folder";
type HeaderProps = {
  data?: { folder: FolderContents };
  isLoading?: boolean;
};

export default function Header({ data, isLoading }: HeaderProps) {
  console.log(data);
  if (data) {
    return <div>{!isLoading && <Folder items={data} />}</div>;
  }
  return <HeaderButton />;
}
