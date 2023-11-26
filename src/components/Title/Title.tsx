import "./Title.css";
import React from "react";

function Title({ folderName, children }: TitleProps) {
  return (
    <div className="title-wrapper">
      <p className="title">{folderName}</p>
      {children}
    </div>
  );
}

export default Title;
