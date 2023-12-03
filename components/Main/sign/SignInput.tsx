import { InputType } from "@/components/Main/sign/Sign.type";
import { ErrorText, Input, OnOffButton } from "@/components/Main/sign/SignInput.styled";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import eyeOff from "@/public/index/sign-eye-off.svg";
import eyeOn from "@/public/index/sign-eye-on.svg";
import { validate_signin, validate_signup } from "@/utils/validate";
import { useRouter } from "next/router";

interface ISignInput extends InputType {
  placeholder?: string;
  $error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

export default function SignInput({ type, placeholder, setError, ...props }: ISignInput) {
  const input = useRef<HTMLInputElement>(null);
  const p = useRef<HTMLParagraphElement>(null);
  const [eyeImage, setEyeImage] = useState<string>(eyeOff);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!input.current) return;

    input.current.type = input.current.type === "password" ? "text" : "password";
    setEyeImage((prev) => (prev === eyeOff ? eyeOn : eyeOff));
  };

  const handleBlur = async () => {
    if (!input.current || !p.current) return;

    const validateFunc = router.asPath === "/signin" ? validate_signin : validate_signup;
    const value = input.current.value;

    const res = await validateFunc({ type, value });
    if (res) {
      p.current.textContent = res;
      setError(() => true);
    }
  };

  const handleFocus = () => {
    if (!p.current) return;
    p.current.textContent = "";
    setError(false);
  };

  return (
    <>
      <Input
        type={type === "email" ? "email" : "password"}
        name={type}
        placeholder={placeholder}
        ref={input}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
      />
      {type === "email" || (
        <OnOffButton type="button" onClick={handleClick}>
          <Image width={16} height={16} src={eyeImage} alt="가려진 비밀번호 보여주기" />
        </OnOffButton>
      )}
      <ErrorText ref={p} />
    </>
  );
}
