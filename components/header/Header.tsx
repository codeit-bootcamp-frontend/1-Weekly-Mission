import React from "react";
import Folder from "../folder/Folder";
import HeaderButton from "../button/HeaderButton";
type HeaderProps = {
  data?: Folder;
  isLoading?: boolean;
};

export default function Header({ data, isLoading }: HeaderProps) {
  if (data) {
    return <div>{!isLoading && <Folder items={data} />}</div>;
  }
  return <HeaderButton />;
}
