import Input from "@/components/input/Input";
import LoginInput from "@/components/input/LoginInput";
import PassWordInput from "@/components/input/PassWordInput";
import { useState } from "react";

export default function Home() {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <>
      <Input />
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        isfocus={isFocus ? "true" : "false"}
      />
      <PassWordInput />
      <LoginInput />
    </>
  );
}
