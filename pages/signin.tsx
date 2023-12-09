import Input from "@/component/common/input";
import styled from "styled-components";
import Image from "next/image";
import LogoImg from "../public/images/sign/signin-logo.svg";
import Link from "next/link";
import KakaoIcon from "../public/images/sign/kakao.svg";
import GoogleIcon from "../public/images/sign/google.svg";
import {
    StyledBg,
    StyledInputBox,
    StyledLoginBox,
    StyledLoginButton,
    StyledLoginButtonBox,
    StyledLoginInputBox,
    StyledLoginSns,
    StyledLoginSnsIconBox,
    StyledLoginTitleBox,
    StyledTitleText,
} from "../component/sign/styledSign";

export default function SignIn() {
    return (
        <StyledBg>
            <StyledLoginBox>
                <StyledLoginTitleBox>
                    <Image src={LogoImg} alt="LogoImg" />
                    <StyledTitleText>
                        회원이 아니신가요?
                        <Link href="/signup">회원 가입하기 </Link>
                    </StyledTitleText>
                </StyledLoginTitleBox>
                <StyledLoginInputBox>
                    <StyledInputBox>
                        이메일
                        <Input />
                    </StyledInputBox>
                    <StyledInputBox>
                        비밀번호
                        <Input passwd />
                    </StyledInputBox>
                </StyledLoginInputBox>
                <StyledLoginButtonBox>
                    <StyledLoginButton>로그인</StyledLoginButton>
                    <StyledLoginSns>
                        소셜 로그인
                        <StyledLoginSnsIconBox>
                            <Link
                                href="https://www.google.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image src={GoogleIcon} alt="GoogleIcon" />
                            </Link>
                            <Link
                                href="https://www.kakaocorp.com/page"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image src={KakaoIcon} alt="KakaoIcon" />
                            </Link>
                        </StyledLoginSnsIconBox>
                    </StyledLoginSns>
                </StyledLoginButtonBox>
            </StyledLoginBox>
        </StyledBg>
    );
}

export const getStaticProps = async () => {
    return {
        props: {
            layout: "sign",
        },
    };
};
