import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import getApi from '../../api/api';
import styled from 'styled-components';

const StyledNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F0F6FF;
    padding: 33px 200px 32px;
    @media (max-width:1124px) {
        padding: 33px 32px 32px;
    }
`

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
`

// const StyledLogin = styled.a`
//     width: 128px;
//     background: linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
//     padding: 16px 20px;
//     border-radius: 8px;
//     color: #F5F5F5;
//     font-size: 18px;
//     font-weight: 600;
//     text-align: center;
// `

function Header() {
    const [email, setEmail] = useState('');
    const [profileImg, setProfileImg] = useState('');

    useEffect(()=>{
        const path = '/users/1'
        const handleUser = async()=>{
            const{ data: [user] } = await getApi(path);
            setEmail(user.email);
            setProfileImg(user.image_source);
        }
        handleUser();
    },[]); 

    return (
        <StyledNav>
            <a href="index.html"><img src={logo} alt='logo' width="133px" height="24px" /></a>
            <StyledAccount>
                <img src={profileImg} alt='profileImg'/>
                {email}
            </StyledAccount>
            {/* <StyledLogin href="/signin.html">
                로그인
            </StyledLogin> */}
        </StyledNav>
    );
}

export default Header;