import { useEffect, useContext } from 'react';
import { SocialLinks, socialMedia } from '@/src/components';
import useIntersectionObserver from '@/src/public/useIntersectionObserver';
import { FooterContext } from '@/pages/folder';
import * as Style from './Footer.style';

export default function Footer() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { setIsFooterVisible } = useContext(FooterContext);

  useEffect(() => {
    setIsFooterVisible(isIntersecting);
  }, [isIntersecting]);

  return (
    <Style.Container ref={ref}>
      <Style.Box>
        <Style.Span>codeit - 2023</Style.Span>
        <Style.LinkContainer>
          <Style.Links href="/privacy">Privacy Policy</Style.Links>
          <Style.Links href="/faq">FAQ</Style.Links>
        </Style.LinkContainer>
        <Style.SnsContainer>
          {socialMedia.map((sns, index) => (
            <SocialLinks
              key={index}
              alt={sns.name}
              url={sns.url}
              icon={sns.icon}
            />
          ))}
        </Style.SnsContainer>
      </Style.Box>
    </Style.Container>
  );
}
