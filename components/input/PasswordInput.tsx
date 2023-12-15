import Image from "next/image";
import EyeOn from "@/public/assets/common/img_eyeOn.png";
import EyeOff from "@/public/assets/common/img_eyeOff.png";
import { useEffect, useState } from "react";
import { Input, InputContainer } from "./userInputStyled";
import { Control, FieldPath, useController } from "react-hook-form";

const obj = {
  password: "비밀번호",
  passwordConfirm: "비밀번호 확인",
};

interface UserInputProps {
  label: "password" | "passwordConfirm";
  placeholder: string;
  control: Control<any>;
  name: FieldPath<any>;
}

const PasswordInput = (props: UserInputProps) => {
  const { label, name, control, placeholder } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: { value: true, message: "비밀번호를 입력해주세요" },
    },
  });

  return (
    <InputContainer>
      <label htmlFor={label}>{obj[label]}</label>
      <div className="inputBox">
        <Input
          $isError={error !== undefined}
          type={isPasswordVisible ? "text" : "password"}
          id={label}
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
        />

        <Image
          src={isPasswordVisible ? EyeOn : EyeOff}
          width="16"
          height="16"
          alt="eyeImg"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      </div>
      {error && ["required", "pattern", "validate"].includes(error?.type) && (
        <div className="errorMsg">{error.message}</div>
      )}
    </InputContainer>
  );
};

export default PasswordInput;
