import React from "react";
import Folder from "../../folder/Folder";
import HeaderButton from "../../components/button/HeaderButton";
export default function Header({ data, isLoading }) {
  if (data) {
    return (
      <div>{!isLoading && <Folder items={data} isLoading={isLoading} />}</div>
    );
  }
  return <HeaderButton />;
}
