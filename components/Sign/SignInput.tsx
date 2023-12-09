import {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/lib/utils/checkSign";
import eyesOffImg from "@/public/eye-off.svg";
import eyesOnImg from "@/public/eye-on.svg";
import * as Styled from "./Sign.styled";

interface Value {
  value: string;
  errMsg: string;
}

interface Props {
  placeholder: string;
  type: string;
  first: boolean;
  label: string;
  setter: (value: SetStateAction<Value>) => void;
  errMsg: string;
}

const SignInput = ({
  placeholder,
  type,
  first,
  label,
  setter,
  errMsg,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const location = router.pathname.split("/")[1]
    ? router.pathname.split("/")[1]
    : "/";

  const [eyeToggle, setEyeToggle] = useState(false);

  const HandleEyesClick = () => {
    if (inputRef.current?.getAttribute("type") === "text") {
      inputRef.current?.setAttribute("type", "password");
      setEyeToggle(!eyeToggle);
    } else {
      inputRef.current?.setAttribute("type", "text");
      setEyeToggle(!eyeToggle);
    }
  };

  const HandleInputFocusOut = () => {
    const targetValue = inputRef.current?.value ? inputRef.current.value : "";

    if (type === "email") {
      if (validateEmailInput(targetValue, location)) {
        const errorMsg = validateEmailInput(targetValue, location);
        setter((prev) => ({
          ...prev,
          errMsg: errorMsg,
        }));
      } else {
        setter((prev) => ({
          ...prev,
          errMsg: "",
        }));
      }
    } else if (type === "password") {
      if (validatePasswordInput(targetValue)) {
        const errorMsg = validatePasswordInput(targetValue);
        setter((prev) => ({
          ...prev,
          errMsg: errorMsg,
        }));
      } else {
        setter((prev) => ({
          ...prev,
          errMsg: "",
        }));
      }
    } else if (type === "passwordConfirm") {
      if (validatePasswordInput(targetValue)) {
        const errorMsg = validatePasswordInput(targetValue);
        setter((prev) => ({
          ...prev,
          errMsg: errorMsg,
        }));
      } else {
        setter((prev) => ({
          ...prev,
          errMsg: "",
        }));
      }
    }
  };

  const HandleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setter((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };

  useEffect(() => {
    if (first) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [first]);

  return (
    <Styled.InputTagContainer>
      <Styled.InputLabel htmlFor={type}>{label}</Styled.InputLabel>
      <Styled.InputTag
        placeholder={placeholder}
        type={type}
        ref={inputRef}
        id={type}
        onBlur={HandleInputFocusOut}
        onChange={HandleInputChange}
        $err={errMsg}
      />
      {type === "email" ||
        (eyeToggle ? (
          <Styled.EyesOn
            src={eyesOnImg}
            alt="비밀번호 토글"
            onClick={HandleEyesClick}
          />
        ) : (
          <Styled.EyesOff
            src={eyesOffImg}
            alt="비밀번호 토글"
            onClick={HandleEyesClick}
          />
        ))}
      {errMsg && <Styled.ErrMsg>{errMsg}</Styled.ErrMsg>}
    </Styled.InputTagContainer>
  );
};

export default SignInput;
