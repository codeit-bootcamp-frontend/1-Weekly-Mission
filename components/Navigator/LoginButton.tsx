import { Dispatch, MouseEvent, SetStateAction, useEffect, useRef } from "react";
import usePopOver from "@/lib/hooks/usePopOver";
import { UserData } from "@/lib/types/data";
import { useLogin } from "@/lib/utils/LoginContext";
import { getUsers } from "@/lib/utils/api";
import { LogoutDropDownList } from "..";
import * as Styled from "./LoginBtn.styled";

interface Props {
  data: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const LoginButton = ({ data, setUserData }: Props) => {
  const { isLogin } = useLogin();
  const ImgBgRef = useRef<HTMLDivElement>(null);
  const { email, imageSource } = data;
  const { isOpen, openPopOver, closePopOver } = usePopOver();

  const BtnClickHandler = async () => {
    try {
      const userProfile = await getUsers();
      const {
        data: [{ email, image_source }],
      } = userProfile;
      setUserData((prevData) => ({
        ...prevData,
        email,
        imageSource: image_source,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginImgClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      closePopOver();
    } else {
      openPopOver();
    }
  };

  useEffect(() => {
    if (!isLogin) return;
    BtnClickHandler();
    // eslint-disable-next-line
  }, [isLogin]);

  useEffect(() => {
    const handleOutsideClick = (e: Event): void => {
      if (e.target !== ImgBgRef.current) {
        closePopOver();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLogin ? (
        <Styled.LoginBox>
          <Styled.LoginImgBg ref={ImgBgRef}>
            <Styled.LoginImg
              src={imageSource}
              alt="프로필 사진"
              fill
              onClick={handleLoginImgClick}
            />
            {isOpen && <LogoutDropDownList anchorRef={ImgBgRef} />}
          </Styled.LoginImgBg>
          <Styled.LoginEmail className="loginEmail">{email}</Styled.LoginEmail>
        </Styled.LoginBox>
      ) : (
        <Styled.LoginBtn href="/signin">
          <span>로그인</span>
        </Styled.LoginBtn>
      )}
    </>
  );
};

export default LoginButton;
