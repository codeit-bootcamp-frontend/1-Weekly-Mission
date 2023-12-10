import styled from "styled-components";
import eyeOnIcon from "../../public/images/input/signin-eye-on.png";
import eyeOffIcon from "../../public/images/input/signin-eye-off.png";
import Image from "next/image";
import { useState } from "react";

interface InputPasswordProps {
    signUp?: boolean;
    passwordValue: string;
    setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
    passwordError: string;
    setPasswordError: React.Dispatch<React.SetStateAction<string>>;
    postApi: () => Promise<void>;
}

export function InputPassword({
    signUp,
    passwordValue,
    setPasswordValue,
    passwordError,
    setPasswordError,
    postApi,
}: InputPasswordProps) {
    const [eyeIcon, setEyeIcon] = useState(eyeOnIcon);
    const [passwdView, setPasswdView] = useState("password");

    function handleIcon() {
        if (eyeIcon === eyeOnIcon) {
            setEyeIcon(eyeOffIcon);
            setPasswdView("text");
        } else {
            setEyeIcon(eyeOnIcon);
            setPasswdView("password");
        }
    }
    function valueError() {
        const regex = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");
        if (passwordValue === "") {
            setPasswordError("비밀번호를 입력해주세요");
        } else if (
            signUp &&
            (passwordValue.length < 8 || !regex.test(passwordValue))
        ) {
            setPasswordError(
                "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
            );
        } else {
            setPasswordError("");
        }
    }
    function enterCheck(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            postApi();
        }
    }

    return (
        <div>
            <StyledInputBox $error={passwordError}>
                <StyledInput
                    type={passwdView}
                    placeholder={
                        signUp
                            ? "영문, 숫자를 조합해 8자 이상 입력해 주세요."
                            : "비밀번호를 입력해 주세요"
                    }
                    onBlur={valueError}
                    onChange={(event) => setPasswordValue(event.target.value)}
                    onKeyDown={enterCheck}
                />
                <StyledInputIcon onClick={handleIcon}>
                    <Image src={eyeIcon} alt="eyeIcon" />
                </StyledInputIcon>
            </StyledInputBox>
            <StyledErrorMsg $error={passwordError}>
                {passwordError}
            </StyledErrorMsg>
        </div>
    );
}

interface InputPasswordCheckProps {
    passwordCheckValue: string;
    setPasswordCheckValue: React.Dispatch<React.SetStateAction<string>>;
    passwordCheckError: string;
    setPasswordCheckError: React.Dispatch<React.SetStateAction<string>>;
    passwordValue: string;
    postApi: () => Promise<void>;
}

export function InputPasswordCheck({
    passwordCheckValue,
    setPasswordCheckValue,
    passwordCheckError,
    setPasswordCheckError,
    passwordValue,
    postApi,
}: InputPasswordCheckProps) {
    const [eyeIcon, setEyeIcon] = useState(eyeOnIcon);
    const [passwdView, setPasswdView] = useState("password");

    function handleIcon() {
        if (eyeIcon === eyeOnIcon) {
            setEyeIcon(eyeOffIcon);
            setPasswdView("text");
        } else {
            setEyeIcon(eyeOnIcon);
            setPasswdView("password");
        }
    }
    function valueError() {
        if (passwordCheckValue === "") {
            setPasswordCheckError("비밀번호를 입력해주세요");
        } else if (passwordValue !== passwordCheckValue) {
            console.log(passwordValue, passwordCheckValue);
            setPasswordCheckError("비밀번호가 일치하지 않아요.");
        } else {
            setPasswordCheckError("");
        }
    }
    function enterCheck(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            postApi();
        }
    }

    return (
        <div>
            <StyledInputBox $error={passwordCheckError}>
                <StyledInput
                    type={passwdView}
                    placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                    onBlur={valueError}
                    onChange={(event) =>
                        setPasswordCheckValue(event.target.value)
                    }
                    onKeyDown={enterCheck}
                />
                <StyledInputIcon onClick={handleIcon}>
                    <Image src={eyeIcon} alt="eyeIcon" />
                </StyledInputIcon>
            </StyledInputBox>
            <StyledErrorMsg $error={passwordCheckError}>
                {passwordCheckError}
            </StyledErrorMsg>
        </div>
    );
}

interface InputEmailProps {
    emailValue: string;
    setEmailValue: React.Dispatch<React.SetStateAction<string>>;
    emailError: string;
    setEmailError: React.Dispatch<React.SetStateAction<string>>;
    postApi: () => Promise<void>;
}

export function InputEmail({
    emailValue,
    setEmailValue,
    emailError,
    setEmailError,
    postApi,
}: InputEmailProps) {
    const regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    function valueCheck() {
        if (emailValue === "") {
            setEmailError("이메일을 입력해주세요.");
        } else if (!regex.test(emailValue)) {
            setEmailError("올바른 이메일 주소가 아닙니다.");
        } else {
            setEmailError("");
        }
    }
    function enterCheck(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            postApi();
        }
    }

    return (
        <div>
            <StyledInputBox $error={emailError}>
                <StyledInput
                    placeholder="이메일을 입력해 주세요."
                    onBlur={valueCheck}
                    onChange={(event) => setEmailValue(event.target.value)}
                    onKeyDown={enterCheck}
                />
            </StyledInputBox>
            <StyledErrorMsg $error={emailError}>{emailError}</StyledErrorMsg>
        </div>
    );
}

const StyledInputBox = styled.div<{ $error: string }>`
    height: 60px;
    padding: 18px 15px;
    border-radius: 8px;
    border: 1px solid ${({ $error }) =>
        $error !== "" ? "var(--red);" : "var(--gray20);"}
    background: var(--white);
    position: relative;
    display: flex;
    align-items: center;
    &:focus-within {
        border: 1px solid var(--primary);
    }
`;

const StyledInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    &::placeholder {
        color: var(--gray60));
    }
`;

const StyledInputIcon = styled.div`
    cursor: pointer;
`;

const StyledErrorMsg = styled.div<{ $error: string }>`
    color: var(--red);
    font-size: 14px;
    margin-top: 6px;
    visibility: ${({ $error }) => ($error !== "" ? "" : "hidden;")};
`;
