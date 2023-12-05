import Link from "next/link";
import {
  InputBoxContainer,
  SocialBoxContainer,
  UserContentWrapper,
  UserHeaderContainer,
  UserWrapper,
} from "./UserStyled";
import Image from "next/image";
import LogoImg from "@/public/assets/common/img_logo.png";
import GoogleIcon from "@/public/assets/user/img_google.png";
import KakaoIcon from "@/public/assets/user/img_kakao.png";
import EmailInput from "../input/EmailInput";
import { ReactNode } from "react";

interface UserProps {
  buttonItem: ReactNode;
  inputItem: ReactNode;
  moveToPageItem: {
    title: string;
    href: string;
    linkTitle: string;
  };
  socialLoginItemTitle: string;
}

const UserLayout = ({
  buttonItem,
  inputItem,
  moveToPageItem,
  socialLoginItemTitle,
}: UserProps) => {
  return (
    <UserWrapper>
      <UserHeaderContainer>
        <Link href="/">
          <Image
            src={LogoImg}
            alt="logoImg"
            height="38"
            width="210"
            className="logoImg"
            priority
          />
        </Link>

        <div className="userContainer">
          <div className="userTitle">{moveToPageItem.title}</div>
          <Link className="moveToPage" href={moveToPageItem.href}>
            {moveToPageItem.linkTitle}
          </Link>
        </div>
      </UserHeaderContainer>

      <UserContentWrapper>
        <InputBoxContainer>
          <form>
            <EmailInput />
            {inputItem}
            {buttonItem}
          </form>
        </InputBoxContainer>

        <SocialBoxContainer>
          <div className="boxTitle">{socialLoginItemTitle}</div>
          <div className="iconContainer">
            <Link href="https://www.google.com/" target="_blank">
              <Image className="socialIcon" src={GoogleIcon} alt="googleIcon" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" target="_blank">
              <Image className="socialIcon" src={KakaoIcon} alt="kakaoIcon" />
            </Link>
          </div>
        </SocialBoxContainer>
      </UserContentWrapper>
    </UserWrapper>
  );
};

export default UserLayout;
