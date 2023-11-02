import { useEffect, useState } from "react";
import logo from "../../assets/images/header//logo.png";
import getApi from "../../api/api";
import styled from "styled-components";

const StyledNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f6ff;
    padding: 33px 200px 32px;
    @media (max-width: 1124px) {
        padding: 33px 32px 32px;
    }
`;

const StyledAccount = styled.div`
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    img {
        width: 28px;
        height: 28px;
        border-radius: 20px;
    }
`;

const StyledLogin = styled.a`
    width: 128px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    padding: 16px 20px;
    border-radius: 8px;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;

function Header() {
    const [email, setEmail] = useState("");
    const [profileImg, setProfileImg] = useState("");

    useEffect(() => {
        const handleUser = async () => {
            try {
                const {
                    data: [user],
                } = await getApi("/users/1");
                setEmail(user.email);
                setProfileImg(user.image_source);
            } catch (error) {
                console.log(error);
            }
        };
        handleUser();
    }, []);

    return (
        <StyledNav>
            <a href="index.html">
                <img src={logo} alt="logo" width="133px" height="24px" />
            </a>
            {email ? (
                <StyledAccount>
                    <img src={profileImg} alt="profileImg" />
                    {email}
                </StyledAccount>
            ) : (
                <StyledLogin href="/signin.html">로그인</StyledLogin>
            )}
        </StyledNav>
    );
}

export default Header;
