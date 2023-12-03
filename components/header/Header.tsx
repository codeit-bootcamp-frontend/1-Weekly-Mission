import React from "react";

import HeaderButton from "../button/HeaderButton";
import { FolderContents } from "@/api/share";
import Folder from "../folder/Folder";
// type HeaderProps = {
//   data?: Folder;
//   isLoading?: boolean;
// };

export default function Header({
  data,
  isLoading,
}: {
  data: { folder: FolderContents };
  isLoading: boolean;
}) {
  if (data) {
    return <div>{!isLoading && <Folder items={data} />}</div>;
  }
  return <HeaderButton />;
}
