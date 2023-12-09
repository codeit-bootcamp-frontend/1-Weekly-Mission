import { ErrorText, Input, OnOffButton, StyledLabel } from "@/components/Main/sign/SignLabel.styled";
import usePwVisibility from "@/hooks/usePwVisibility";
import useSignInput from "@/hooks/useSignInput";
import Image from "next/image";

const TEXT = {
  label: {
    password: "비밀번호",
    passwordCheck: "비밀번호 확인",
  },
  placeholder: {
    password: "비밀번호를 입력해주세요.",
    passwordCheck: "동일한 비밀번호를 입력해주세요.",
  },
};

export default function SignPwLabel({ type }: { type: "password" | "passwordCheck" }) {
  const { error, input, p, handleBlur, handleFocus } = useSignInput();
  const { toggleImg, handleToggle } = usePwVisibility(input);

  return (
    <StyledLabel $error={error}>
      {TEXT.label[type]}
      <Input
        type="password"
        name={type}
        placeholder={TEXT.placeholder[type]}
        ref={input}
        onBlur={handleBlur}
        onFocus={handleFocus}
        $error={error}
        autoComplete="current-password"
      />
      <OnOffButton type="button" onClick={handleToggle}>
        <Image width={16} height={16} src={toggleImg} alt="가려진 비밀번호 보여주기" />
      </OnOffButton>
      <ErrorText ref={p} />
    </StyledLabel>
  );
}
