import { useRouter } from "next/router";
import { useState } from "react";
import { Input } from "@/components/sharing/ui-input";
import styles from "styles/home.module.scss";
import classNames from "classnames/bind"; // classnames 임포트 추가

const cx = classNames.bind(styles);

export default function Home() {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordAgainValue, setPasswordAgainValue] = useState("");
  const router = useRouter();

  function handleIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIdValue(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordValue(e.target.value);
  }

  function handlePasswordAgainChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordAgainValue(e.target.value);
  }

  return (
    <>
      <div className={cx("title")}>Testing Input</div>
      <div className={cx("signin")}>
        <Input
          type="text"
          value={idValue}
          onChange={handleIdChange}
          placeholder="여기에 입력"
        />
        <Input
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder="비밀번호 입력"
        />
        <Input
          type="password"
          value={passwordAgainValue}
          onChange={handlePasswordAgainChange}
          placeholder="비밀번호 재입력"
          hasError={true}
        />
      </div>
    </>
  );
}
