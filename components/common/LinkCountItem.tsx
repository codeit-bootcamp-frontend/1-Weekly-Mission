import { useState } from 'react';
import styled, { css } from 'styled-components';
import checkIcon from '@/public/assets/images/folder_check.svg';
import Image from 'next/image';

interface Props {
  item: {
    name: string;
    count: number;
  };
}

function LinkCountItem({ item }: Props) {
  const [check, setCheck] = useState(false);

  function handleFolderCheck(): void {
    setCheck(!check);
  }

  return (
    <Container onClick={handleFolderCheck}>
      <Wrapper>
        <FolderTitle>{item.name}</FolderTitle>
        <Count>{`${item.count}개 링크`}</Count>
      </Wrapper>
      {check && <Image src={checkIcon} alt="폴더 선택 표시 아이콘" />}
    </Container>
  );
}

export default LinkCountItem;

const FolderTitle = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
`;
const checkFolder = css`
  background-color: var(--bg);
  border-radius: 8px;
  ${FolderTitle} {
    color: var(--primary-color);
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    ${checkFolder};
  }
`;
const Count = styled.span`
  color: var(--gray-60);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;
