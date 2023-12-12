import { useEffect, useContext } from 'react';
import { SocialLinks, socialMedia } from '@/components';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import * as Style from './Footer.style';
import useIntersectionObserver from '@/public/useIntersectionObserver';
import { FooterContext } from '@/pages/folder';

interface Props {
  ref: React.Ref<HTMLDivElement>;
}

export default function Footer() {
  const {ref, isIntersecting } = useIntersectionObserver();
  const {setIsFooterVisible} = useContext(FooterContext);

  useEffect (() => {
    setIsFooterVisible(isIntersecting);
  },[isIntersecting])

  return (
    <ThemeProvider theme={theme}>
      <Style.Container ref={ref}>
        <Style.Box>
          <Style.Span>codeit - 2023</Style.Span>
          <Style.LinkContainer>
            <Style.Links href="privacy.html">Privacy Policy</Style.Links>
            <Style.Links href="faq.html">FAQ</Style.Links>
          </Style.LinkContainer>
          <Style.SnsContainer>
            {socialMedia.map((sns, index) => (
              <SocialLinks key={index} alt={sns.name} url={sns.url} icon={sns.icon} />
            ))}
          </Style.SnsContainer>
        </Style.Box>
      </Style.Container>
    </ThemeProvider>
  );
}

