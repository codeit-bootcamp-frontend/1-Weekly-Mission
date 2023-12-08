import { PathName } from "@/src/Input/ui-input-title/SignTitle";
import { Cta } from "@/src/sharing/ui-cta";
import { TEXT } from "@/src/sharing/ui-footer/constant";
import styles from "./SignButton.module.scss";
import classNames from "classnames/bind";
import axios from "axios"; // react-router-dom v5 이상 필요
import { useAsync } from "@/src/sharing/util";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";

// const router = useRouter();

// interface getSignInResultProps {
//   email: string;
//   password: string;
// }

// const getSignInResult = ({ email, password }: getSignInResultProps) => {
//   const res = axios.post("https://bootcamp-api.codeit.kr/api/sign-in", {
//     email: "test@codeit.com",
//     password: "sprint101",
//   });
//   return res;
// };

// const { execute, loading, error, data } = useAsync(getSignInResult());

// // 성공 응답을 받으면 "/folder" 경로로 이동
// useEffect(() => {
//   if (data) {
//     router.push('/folder');
//   }
// }, [data, history]);

const cx = classNames.bind(styles);

const SignButton = ({ pathName }: PathName) => {
  const handleClick = () => {};

  return (
    <>
      <button className={cx("sign-button")} onClick={handleClick}>
        <Cta>
          <span className={cx("text")}>
            {pathName.isSigninPage ? TEXT.login : TEXT.join}
          </span>
        </Cta>
      </button>
    </>
  );
};

export default SignButton;
