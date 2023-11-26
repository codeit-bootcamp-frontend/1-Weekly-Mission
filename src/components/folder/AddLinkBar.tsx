import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinkBar from './LinkBar';

function AddLinkBar() {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setBottom(entry.isIntersecting ? false : true);
      });
    });

    const target = document.querySelector('.top_link_bar');
    if (target) {
      console.log(target);
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Top className="top_link_bar">
        <LinkBar />
      </Top>
      <Bottom $display={bottom}>
        <LinkBar />
      </Bottom>
    </>
  );
}

export default AddLinkBar;

const Top = styled.div`
  width: 100%;
  padding: 60px 0 90px;

  background-color: var(--bg);

  @media (max-width: 1199px) {
    padding: 60px 32.5px;
  }

  @media (max-width: 767px) {
    padding: 24px 32px 40px;
  }
`;

const Bottom = styled.div<{ $display: boolean }>`
  display: ${({ $display }) => ($display ? 'default' : 'none')};

  width: 100%;
  padding: 24px 0;

  position: fixed;
  bottom: 0;
  z-index: 99;

  background-color: var(--bg);

  @media (max-width: 1199px) {
    padding: 24px 32.5px;
  }

  @media (max-width: 767px) {
    padding: 16px 32px;
  }
`;
