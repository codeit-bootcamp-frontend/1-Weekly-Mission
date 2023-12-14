import {
    InputEmail,
    InputPassword,
    InputPasswordCheck,
} from "@/component/common/input";
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
import Router from "next/router";
import { checkEmail, postSignUp } from "@/component/api/api";

interface Data {
    data: {
        accessToken: string;
        refreshToken: string;
    };
}

export default function SignUp() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordCheckValue, setPasswordCheckValue] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            Router.push("/folder");
        }
    }, []);

    async function postApi() {
        try {
            await checkEmail(emailValue);
            try {
                const { data } = await postSignUp(emailValue, passwordValue);
                localStorage.setItem("accessToken", data.accessToken);
                Router.push("/folder");
            } catch (e) {
                setEmailError("이메일을 확인해주세요.");
                setPasswordError("비밀번호를 확인해주세요.");
                setPasswordCheckError("비밀번호를 확인해주세요.");
            }
        } catch (e) {
            setEmailError("중복되는 이메일입니다.");
        }
    }

    return (
        <StyledBg>
            <StyledLoginBox>
                <StyledLoginTitleBox>
                    <Image src={LogoImg} alt="LogoImg" />
                    <StyledTitleText>
                        이미 회원이신가요?
                        <Link href="/signin">로그인 하기</Link>
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
                            signUp
                            passwordValue={passwordValue}
                            setPasswordValue={setPasswordValue}
                            passwordError={passwordError}
                            setPasswordError={setPasswordError}
                            postApi={postApi}
                        />
                    </StyledInputBox>
                    <StyledInputBox>
                        비밀번호 확인
                        <InputPasswordCheck
                            passwordCheckValue={passwordCheckValue}
                            setPasswordCheckValue={setPasswordCheckValue}
                            passwordCheckError={passwordCheckError}
                            setPasswordCheckError={setPasswordCheckError}
                            passwordValue={passwordValue}
                            postApi={postApi}
                        />
                    </StyledInputBox>
                </StyledLoginInputBox>
                <StyledLoginButtonBox>
                    <StyledLoginButton onClick={postApi}>
                        회원가입
                    </StyledLoginButton>
                    <StyledLoginSns>
                        다른 방싣으로 가입하기
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
