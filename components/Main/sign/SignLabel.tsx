import { InputType } from "@/components/Main/sign/Sign.type";
import { ErrorText, Input, OnOffButton, StyledLabel } from "@/components/Main/sign/SignLabel.styled";
import usePwVisibility from "@/hooks/usePwVisibility";
import useSignInput from "@/hooks/useSignInput";
import Image from "next/image";

const TEXT = {
  email: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
};

export default function SignLabel({ type }: InputType) {
  const { error, input, p, handleBlur, handleFocus } = useSignInput();
  const { toggleImg, handleToggle } = usePwVisibility(input);
  return (
    <StyledLabel $error={error}>
      {TEXT[type]}
      <Input
        type={type === "email" ? "email" : "password"}
        name={type}
        placeholder={TEXT[type]}
        ref={input}
        onBlur={handleBlur}
        onFocus={handleFocus}
        $error={error}
      />
      {type === "email" || (
        <OnOffButton type="button" onClick={handleToggle}>
          <Image width={16} height={16} src={toggleImg} alt="가려진 비밀번호 보여주기" />
        </OnOffButton>
      )}
      <ErrorText ref={p} />
    </StyledLabel>
  );
}
