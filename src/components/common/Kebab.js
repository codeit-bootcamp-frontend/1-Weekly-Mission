import { useState } from 'react';
import styled from 'styled-components';
import KebabModal from 'components/common/Modal/KebabModal';
import kebabIcon from 'assets/images/kebab.svg';

function Kebab() {
  const [modal, SetModal] = useState(false);

  function handleMocdalClick(event) {
    event.preventDefault();
    modal === false ? SetModal(true) : SetModal(false);
  }

  return (
    <Wrapper onClick={handleMocdalClick}>
      <img src={kebabIcon} alt="kebab" />
      {modal && <KebabModal />}
    </Wrapper>
  );
}

export default Kebab;

const Wrapper = styled.div`
  position: relative;
`;
