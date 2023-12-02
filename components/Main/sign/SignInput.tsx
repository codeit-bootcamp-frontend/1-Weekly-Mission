import { InputType } from "@/components/Main/sign/Sign.type";
import { Input, OnOffButton } from "@/components/Main/sign/SignInput.styled";
import Image from "next/image";

export default function SignInput({ type }: InputType) {
  return (
    <>
      <Input type={type === "email" ? "email" : "password"} />
      {type === "passwordCheck" && (
        <OnOffButton type="button">
          <Image width={16} height={16} id="imgPw" src="index/sign-eye-off.svg" alt="가려진 비밀번호 보여주기" />
        </OnOffButton>
      )}
    </>
  );
}
