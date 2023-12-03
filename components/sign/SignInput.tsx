import {
  ErrorText,
  Input,
  OnOffButton,
} from "@/components/Main/sign/SignInput.styled";
import Image from "next/image";
import { useRef, useState } from "react";
import eyeOff from "@/public/index/sign-eye-off.svg";
import eyeOn from "@/public/index/sign-eye-on.svg";

interface InputType {
  type: "email" | "password" | "passwordCheck";
}
interface ISignInput extends InputType {
  placeholder: string;
}

export default function SignInput({ type, placeholder }: ISignInput) {
  const input = useRef<HTMLInputElement>(null);
  const p = useRef<HTMLParagraphElement>(null);
  const [eyeImage, setEyeImage] = useState<string>(eyeOff);

  const handleClick = () => {
    if (!input.current) return;
    input.current.type =
      input.current?.type === "password" ? "text" : "password";
    setEyeImage((prev) => (prev === eyeOff ? eyeOn : eyeOff));
  };
  return (
    <>
      <Input
        type={type === "email" ? "email" : "password"}
        placeholder={placeholder}
        ref={input}
      />
      {type === "email" || (
        <OnOffButton type="button" onClick={handleClick}>
          <Image
            width={16}
            height={16}
            src={eyeImage}
            alt="가려진 비밀번호 보여주기"
          />
        </OnOffButton>
      )}
      <ErrorText ref={p} />
    </>
  );
}
