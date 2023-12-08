import { Dispatch, SetStateAction, useEffect } from "react";
import { UserData } from "@/lib/types/data";
import { useLogin } from "@/lib/utils/LoginContext";
import { getUsers } from "@/lib/utils/api";
import { setLocalStorage } from "@/lib/utils/localStorage";
import * as Styled from "./StyledLoginBtn";

interface Props {
  data: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const LoginButton = ({ data, setUserData }: Props) => {
  const { isLogin, setIsLogin } = useLogin();
  const { email, imageSource } = data;

  const BtnClickHandler = async () => {
    try {
      const userProfile = await getUsers();
      setIsLogin(true);
      setLocalStorage();
      const {
        data: [{ email, image_source }],
      } = userProfile;
      setUserData((prevData) => ({
        ...prevData,
        email,
        imageSource: image_source,
      }));
    } catch (err) {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    if (!isLogin) return;
    BtnClickHandler();
    // eslint-disable-next-line
  }, [isLogin]);

  return (
    <>
      {isLogin ? (
        <Styled.LoginBox>
          <Styled.LoginImgBg>
            <Styled.LoginImg
              src={imageSource}
              alt="프로필 사진"
            ></Styled.LoginImg>
          </Styled.LoginImgBg>
          <Styled.LoginEmail className="loginEmail">{email}</Styled.LoginEmail>
        </Styled.LoginBox>
      ) : (
        <Styled.LoginBtn onClick={BtnClickHandler} href="/">
          <span>로그인</span>
        </Styled.LoginBtn>
      )}
    </>
  );
};

export default LoginButton;
