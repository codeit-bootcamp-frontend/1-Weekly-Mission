import { MouseEvent, useEffect, useRef } from "react";
import usePopOver from "@/lib/hooks/usePopOver";
import { useLogin } from "@/lib/utils/AuthContext";
import { LogoutDropDownList } from "..";
import * as Styled from "./LoginBtn.styled";

const LoginButton = () => {
  const ImgBgRef = useRef<HTMLDivElement>(null);
  const { isLogin, userEmail, image_source } = useLogin();
  const { isOpen, openPopOver, closePopOver } = usePopOver();

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
        <Styled.LoginBox ref={ImgBgRef}>
          <Styled.LoginImgBg>
            <Styled.LoginImg
              src={image_source}
              alt="프로필 사진"
              fill
              onClick={handleLoginImgClick}
            />
            {isOpen && <LogoutDropDownList anchorRef={ImgBgRef} />}
          </Styled.LoginImgBg>
          <Styled.LoginEmail>{userEmail}</Styled.LoginEmail>
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
