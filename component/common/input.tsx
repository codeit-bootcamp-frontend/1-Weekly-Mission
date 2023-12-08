import styled from "styled-components";
import eyeOnIcon from "../../public/images/input/signin-eye-on.png";
import eyeOffIcon from "../../public/images/input/signin-eye-off.png";
import Image from "next/image";
import { useState } from "react";

export default function Input({ passwd }: { passwd?: boolean }) {
    const [eyeIcon, setEyeIcon] = useState(eyeOnIcon);
    const [passwdView, setPasswdView] = useState("password");
    const [error, setError] = useState(false);
    const errorCase = "오류";

    function handleIcon() {
        if (eyeIcon === eyeOnIcon) {
            setEyeIcon(eyeOffIcon);
            setPasswdView("text");
        } else {
            setEyeIcon(eyeOnIcon);
            setPasswdView("password");
        }
    }
    function valueError(event: React.FocusEvent<HTMLInputElement>) {
        if (errorCase === event.target.value) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <>
            <StyledInputBox $error={error}>
                {passwd ? (
                    <>
                        <StyledInput type={passwdView} onBlur={valueError} />
                        <StyledInputIcon onClick={handleIcon}>
                            <Image src={eyeIcon} alt="eyeIcon" />
                        </StyledInputIcon>
                    </>
                ) : (
                    <StyledInput placeholder="내용 입력" onBlur={valueError} />
                )}
            </StyledInputBox>
            <StyledErrorMsg $error={error}>
                내용을 다시 작성해주세요
            </StyledErrorMsg>
        </>
    );
}

const StyledInputBox = styled.div<{ $error: boolean }>`
    width: 350px;
    height: 60px;
    padding: 18px 15px;
    border-radius: 8px;
    border: 1px solid ${({ $error }) =>
        $error ? "var(--red);" : "var(--gray20);"}
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

const StyledErrorMsg = styled.div<{ $error: boolean }>`
    color: var(--red);
    font-size: 14px;
    margin-top: 6px;
    display: ${({ $error }) => ($error ? "" : "none;")};
`;
