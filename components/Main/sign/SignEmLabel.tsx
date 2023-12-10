import { InputRef } from "@/components/Main/sign/Sign.type";
import { ErrorText, Input, StyledLabel } from "@/components/Main/sign/SignLabel.styled";
import useSignInput from "@/hooks/useSignInput";
import { RefObject, forwardRef, useImperativeHandle } from "react";

export default forwardRef(function SignEmLabel(props, ref) {
  const { error, input, p, handleBlur, handleFocus } = useSignInput();

  useImperativeHandle(
    ref,
    () => {
      return {
        ...(ref as RefObject<InputRef>).current,
        emBlur() {
          return handleBlur();
        },
      };
    },
    []
  );

  return (
    <StyledLabel $error={error}>
      이메일
      <Input type="email" name="email" placeholder="이메일을 입력해주세요" ref={input} onBlur={handleBlur} onFocus={handleFocus} $error={error} />
      <ErrorText ref={p} />
    </StyledLabel>
  );
});
