import facebookIcon from "../../assets/images/facebook-fill.png";
import twitterIcon from "../../assets/images/twitter-fill.png";
import youtubeIcon from "../../assets/images/youtube-fill.png";
import instagramIcon from "../../assets/images/instagram-filled.png";
import styled from "styled-components";

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

function Footer() {
    return (
        <StyledFooterBox>
            ©codeit - 2023
            <StyledFaq>
                <a href="privacy.html">Privacy Policy</a>
                <a href="faq.html">FAQ</a>
            </StyledFaq>
            <StyledSns>
                <a href="https://www.facebook.com/">
                    <img src={facebookIcon} alt="facebook" />
                </a>
                <a href="https://twitter.com/">
                    <img src={twitterIcon} alt="twitter" />
                </a>
                <a href="https://www.youtube.com/">
                    <img src={youtubeIcon} alt="youtube" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagramIcon} alt="instagram" />
                </a>
            </StyledSns>
        </StyledFooterBox>
    );
}

export default Footer;
