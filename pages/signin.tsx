import { InputEmail, InputPassword } from "@/component/common/input";
import Image from "next/image";
import LogoImg from "../public/images/sign/signin-logo.svg";
import Link from "next/link";
import KakaoIcon from "../public/images/sign/kakao.svg";
import GoogleIcon from "../public/images/sign/google.svg";
import { useEffect, useState } from "react";
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
import { postSignIn } from "@/component/api/api";
import Router from "next/router";

interface Data {
    data: {
        accessToken: string;
        refreshToken: string;
    };
}

export default function SignIn() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            Router.push("/folder");
        }
    }, []);

    async function postApi() {
        try {
            const { data } = await postSignIn(emailValue, passwordValue);
            localStorage.setItem("accessToken", data.accessToken);
            Router.push("/folder");
        } catch (e) {
            setEmailError("이메일을 확인해주세요.");
            setPasswordError("비밀번호를 확인해주세요.");
        }
    }

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
                        <InputEmail
                            emailValue={emailValue}
                            setEmailValue={setEmailValue}
                            emailError={emailError}
                            setEmailError={setEmailError}
                            postApi={postApi}
                        />
                    </StyledInputBox>
                    <StyledInputBox>
                        비밀번호
                        <InputPassword
                            passwordValue={passwordValue}
                            setPasswordValue={setPasswordValue}
                            passwordError={passwordError}
                            setPasswordError={setPasswordError}
                            postApi={postApi}
                        />
                    </StyledInputBox>
                </StyledLoginInputBox>
                <StyledLoginButtonBox>
                    <StyledLoginButton onClick={postApi}>
                        로그인
                    </StyledLoginButton>
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
