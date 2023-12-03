import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./SignInput.module.scss";
import { IconEyeOff } from "@images/index";
import eyeOff from "@images/eye-off.svg";
import eyeOn from "@images/eye-on.svg";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const obj = {
  email: {
    label: "이메일",
    type: "email",
  },
  password: {
    label: "비밀번호",
    type: "password",
  },
  passwordCheck: {
    label: "비밀번호 확인",
    type: "password",
  },
};

interface SignInput {
  type: "email" | "password" | "passwordCheck";
  placeholder: string;
}

export default function SignInput({ type, placeholder }: SignInput) {
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
    <div className={cx("input-container")}>
      <input
        className={cx("input")}
        type={type === "email" ? "email" : "password"}
        placeholder={placeholder}
        ref={input}
      />
      {type === "email" || (
        <button
          className={cx("on-off-button")}
          type="button"
          onClick={handleClick}
        >
          <IconEyeOff />
        </button>
      )}

      <p ref={p} />
    </div>
  );
}
