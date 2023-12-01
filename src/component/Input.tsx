import React, { ReactElement, useState } from "react";

export default function SigninInput(): ReactElement {
  const [placeholder, setPlaceholder] = useState("내용 입력");
  return (
    <>
      <input placeholder={placeholder} />
    </>
  );
}
