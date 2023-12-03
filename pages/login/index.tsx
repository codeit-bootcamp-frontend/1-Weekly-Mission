import Input from "@/components/input/Input";
import LoginInput from "@/components/input/LoginInput";
import PassWordInput from "@/components/input/PassWordInput";
import { useState } from "react";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className={styles.container}>
      <Input />
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        isfocus={isFocus ? "true" : "false"}
      />
      <PassWordInput />
      <LoginInput />
    </div>
  );
}
