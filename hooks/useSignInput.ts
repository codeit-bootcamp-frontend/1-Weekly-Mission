import { useRouter } from "next/router";
import { useRef, useState } from "react";

import { validate_signin, validate_signup } from "@/utils/validate";
import { InputType } from "@/components/Main/sign/Sign.type";

export default function useSignInput() {
  const [error, setError] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const p = useRef<HTMLParagraphElement>(null);
  const router = useRouter();

  const handleBlur = async () => {
    if (!input.current || !p.current) return;

    const validateFunc = router.pathname === "/signin" ? validate_signin : validate_signup;
    const type = input.current.name as InputType["type"];
    const value = input.current.value;

    const res = await validateFunc({ type, value });
    if (res) {
      setError(true);
      p.current.textContent = res;
      return true;
    }
    setError(false);
    return false;
  };

  const handleFocus = () => {
    if (!p.current) return;
    setError(false);
    p.current.textContent = "";
  };

  return { error, input, p, handleBlur, handleFocus };
}
