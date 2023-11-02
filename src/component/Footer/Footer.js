import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import SNS from "./SNS.js";
import socialMedia from "./SocialMedia.js";
import * as S from "./Footer.style.js";
import theme from "../../css/display.js";

export function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <S.Box>
          <span>codeit - 2023</span>
          <S.Links>
            <Link to="privacy.html">
              Privacy Policy
            </Link>
            <Link to="faq.html">
              FAQ
            </Link>
          </S.Links>
          <S.SnsContainer>
            {socialMedia.map((sns, index) => (
              <SNS key={index} alt={sns.name} url={sns.url} icon={sns.icon} />
            ))}
          </S.SnsContainer>
        </S.Box>
      </S.Container>
    </ThemeProvider>
  );
}
