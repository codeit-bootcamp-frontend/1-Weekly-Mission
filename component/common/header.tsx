import { useEffect, useState } from "react";
import logo from "../../public/images/header/logo.png";
import { getApi } from "../api/api";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface User {
    auth_id: string;
    create_at: string;
    email: string;
    id: number;
    image_source: string;
    name: string;
}

export default function Header() {
    const [email, setEmail] = useState("");
    const [profileImg, setProfileImg] = useState("");

    useEffect(() => {
        const handleUser = async () => {
            try {
                const { data } = await getApi("/users/1");
                const user = data[0] as User;
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
            <Link href="/">
                <Image src={logo} alt="logo" width={133} height={24} />
            </Link>
            {email ? (
                <StyledAccount>
                    <Image
                        src={profileImg}
                        width={28}
                        height={28}
                        alt="profileImg"
                    />
                    {email}
                </StyledAccount>
            ) : (
                <StyledLogin href="/signin.html">로그인</StyledLogin>
            )}
        </StyledNav>
    );
}

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
    position: relative;
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
