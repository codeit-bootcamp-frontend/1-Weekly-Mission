import styled from 'styled-components';
import LinkBar from './LinkBar';
import { useObserver } from '@/hooks/useObserver';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { useState } from 'react';

function AddLinkBar() {
  const [inputValue, setInputValue] = useState('');
  const visibleFooter = useObserver('footer');
  let top = useObserver('.top_link_bar');
  if (visibleFooter) top = true;

  return (
    <>
      <Top className="top_link_bar">
        <LinkBar initialValue={inputValue} setInputValue={setInputValue} />
      </Top>
      <Bottom $display={!top}>
        <LinkBar initialValue={inputValue} setInputValue={setInputValue} />
      </Bottom>
    </>
  );
}

export default AddLinkBar;

const Top = styled.div`
  width: 100%;
  padding: 60px 0 90px;

  background-color: var(--bg);

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 60px 32.5px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
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

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 24px 32.5px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 16px 32px;
  }
`;
