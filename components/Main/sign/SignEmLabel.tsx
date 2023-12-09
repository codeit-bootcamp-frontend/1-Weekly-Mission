import { ErrorText, Input, StyledLabel } from "@/components/Main/sign/SignLabel.styled";
import useSignInput from "@/hooks/useSignInput";

export default function SignEmLabel() {
  const { error, input, p, handleBlur, handleFocus } = useSignInput();
  return (
    <StyledLabel $error={error}>
      이메일
      <Input type="email" name="email" placeholder="이메일을 입력해주세요" ref={input} onBlur={handleBlur} onFocus={handleFocus} $error={error} />
      <ErrorText ref={p} />
    </StyledLabel>
  );
}
