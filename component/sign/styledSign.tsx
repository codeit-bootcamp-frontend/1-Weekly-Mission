import styled from "styled-components";

export const StyledBg = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--bg);
    padding: 240px 0 0;
    @media (min-width: 768px) and (max-width: 1124px) {
        padding: 200px 0 0;
    }
    @media (max-width: 767px) {
        padding: 120px 0 0;
    }
`;

export const StyledLoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const StyledLoginInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`;

export const StyledInputBox = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;
    @media (max-width: 767px) {
        width: 320px;
    }
`;

export const StyledLoginTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const StyledTitleText = styled.div`
    display: flex;
    gap: 8px;
    a {
        color: var(--primary);
        font-weight: 600;
        text-decoration: underline;
    }
`;

export const StyledLoginButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const StyledLoginButton = styled.div`
    width: 400px;
    padding: 16px 20px;
    border-radius: 8px;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    background: var(
        --gra-purpleblue-to-skyblue,
        linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
    @media (max-width: 767px) {
        width: 320px;
    }
`;

export const StyledLoginSns = styled.div`
    width: 400px;
    display: flex;
    padding: 12px 24px;
    border-radius: 8px;
    border: 1px solid var(--gray20);
    background: var(--gray10);
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #373740;
    @media (max-width: 767px) {
        width: 320px;
    }
`;

export const StyledLoginSnsIconBox = styled.div`
    display: flex;
    gap: 16px;
`;
