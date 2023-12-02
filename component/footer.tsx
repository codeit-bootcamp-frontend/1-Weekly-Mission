import facebookIcon from "../public/footer/facebook-fill.png";
import twitterIcon from "../public/footer/twitter-fill.png";
import youtubeIcon from "../public/footer/youtube-fill.png";
import instagramIcon from "../public/footer/instagram-filled.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <StyledFooterBox>
            ©codeit - 2023
            <StyledFaq>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/faq">FAQ</Link>
            </StyledFaq>
            <StyledSns>
                <Link href="https://www.facebook.com/">
                    <Image src={facebookIcon} alt="facebook" />
                </Link>
                <Link href="https://twitter.com/">
                    <Image src={twitterIcon} alt="twitter" />
                </Link>
                <Link href="https://www.youtube.com/">
                    <Image src={youtubeIcon} alt="youtube" />
                </Link>
                <Link href="https://www.instagram.com/">
                    <Image src={instagramIcon} alt="instagram" />
                </Link>
            </StyledSns>
        </StyledFooterBox>
    );
}

const StyledFooterBox = styled.div`
    height: 160px;
    padding: 32px 104px 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111322;
    color: #676767;
`;

const StyledFaq = styled.div`
    display: flex;
    gap: 30px;
    a {
        color: #676767;
    }
`;

const StyledSns = styled.div`
    display: flex;
    gap: 12px;
`;
