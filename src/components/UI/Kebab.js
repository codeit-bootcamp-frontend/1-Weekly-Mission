import styled from 'styled-components';
import kebab from '../../assets/kebab.svg';
import SelectMenuButton from './SelectMenuButton';
import React, { useState, useRef, useEffect } from 'react';

const kebabOptions = ['삭제하기', '폴더에 추가'];

function Kebab() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 핸들러 제거
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      // 메뉴가 열린 상태에서 다른 곳을 클릭하면 메뉴를 닫음
      setIsMenuVisible(false);
    }
  };

  return (
    <KebabButton ref={menuRef}>
      <KebabImg src={kebab} alt="더보기 아이콘" onClick={handleClick} />
      {isMenuVisible && (
        <KebabOptionsContainer>
          {kebabOptions.map((item, index) => (
            <SelectMenuButton key={index} modal={item}>
              {item}
            </SelectMenuButton>
          ))}
        </KebabOptionsContainer>
      )}
    </KebabButton>
  );
}

export default Kebab;

const KebabButton = styled.button`
  position: relative;
  display: inline-block;
`;

const KebabImg = styled.img`
  width: 2.1rem;
  height: 1.7rem;
`;

const KebabOptionsContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 1;
  display: block;
`;
