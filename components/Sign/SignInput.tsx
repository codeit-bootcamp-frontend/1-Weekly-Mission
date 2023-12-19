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
  validatePasswordConfirmInput,
} from "@/lib/utils/checkSign";
import eyesOffImg from "@/public/eye-off.svg";
import eyesOnImg from "@/public/eye-on.svg";
import * as Styled from "./Sign.styled";
import { validateOverlapEmail } from "@/lib/utils/api";

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
  isOverlap?: boolean;
  setIsOverlap: (value: SetStateAction<boolean>) => void;
  emailValue: string;
  passwordValue: string;
  disabled?: boolean;
}

const SignInput = ({
  placeholder,
  type,
  first,
  label,
  setter,
  errMsg,
  isOverlap,
  setIsOverlap,
  emailValue,
  passwordValue,
  disabled,
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

    if (label === "이메일") {
      if (validateEmailInput(targetValue)) {
        const errorMsg = validateEmailInput(targetValue);
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
    } else if (label === "비밀번호") {
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
    } else if (label === "비밀번호 확인") {
      if (validatePasswordConfirmInput(passwordValue, targetValue)) {
        const errorMsg = validatePasswordConfirmInput(
          passwordValue,
          targetValue
        );
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

  const HandleOverlapBtnClick = async () => {
    if (!isOverlap) return;
    if (validateEmailInput(emailValue)) {
      const errorMsg = validatePasswordInput(emailValue);
      setter((prev) => ({
        ...prev,
        errMsg: errorMsg,
      }));
    } else {
      try {
        const result = await validateOverlapEmail(emailValue);
        const {
          data: { isUsableNickname },
        } = result;
        setter((prev) => ({
          ...prev,
          errMsg: "",
        }));
        if (window.confirm("해당 이메일로 확정하시겠습니까?")) {
          setIsOverlap(!isUsableNickname);
        } else {
          setIsOverlap(isUsableNickname);
        }
      } catch {
        setter((prev) => ({
          ...prev,
          errMsg: "이미 존재하는 이메일입니다.",
        }));
        setIsOverlap(true);
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
      <Styled.InputLabel htmlFor={label}>{label}</Styled.InputLabel>
      <Styled.InputTagBox>
        <Styled.InputTag
          placeholder={placeholder}
          type={type}
          ref={inputRef}
          id={label}
          onBlur={HandleInputFocusOut}
          onChange={HandleInputChange}
          $err={errMsg}
          disabled={disabled}
        />
        {location === "signup" && type === "email" && (
          <Styled.CheckOverlapBtn
            onClick={HandleOverlapBtnClick}
            $isOverlap={isOverlap}
          >
            {isOverlap ? `중복 확인` : `확인 완료`}
          </Styled.CheckOverlapBtn>
        )}
      </Styled.InputTagBox>
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
