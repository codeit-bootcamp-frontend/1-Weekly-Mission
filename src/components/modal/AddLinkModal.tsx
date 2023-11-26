import styled from 'styled-components';
import checkImg from '../../assets/images/check.svg';
import { ModalButton, SubTitle } from './ModalStyle';
import { useState } from 'react';

interface UserFolder {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

interface Props {
  link: string;
  userFolder: UserFolder[];
}

interface Select {
  $selected: boolean;
}

export default function AddLinkModal({ link, userFolder }: Props) {
  const [selects, setSelects] = useState<number[]>([]);
  const handleClick = (id: number) => {
    if (selects.includes(id)) {
      setSelects((prev) => [...prev.filter((el) => el !== id)]);
    } else {
      setSelects((prev) => [...prev, id]);
    }
  };
  return (
    <>
      <SubTitle>{link}</SubTitle>
      <Container>
        {userFolder.map((el) => (
          <Box
            key={`${el.id}1`}
            onClick={() => {
              handleClick(el.id);
            }}
            $selected={selects.includes(el.id)}
          >
            <div>
              <span>{el.name}</span>
              <Count>{el.link.count}개 링크</Count>
            </div>
            <CheckImg src={checkImg} />
          </Box>
        ))}
      </Container>
      <ModalButton type='추가하기'></ModalButton>
    </>
  );
}

const Container = styled.div`
  margin-bottom: 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckImg = styled.img`
  display: none;
`;

const Box = styled.div<Select>`
  padding: 8px;
  line-height: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${({ $selected }) => $selected && 'var(--linkbrary-bg)'};
  color: ${({ $selected }) => $selected && 'var(--linkbrary-primary-color)'};
  ${CheckImg} {
    display: ${({ $selected }) => $selected && 'inline'};
  }
  &:hover {
    background-color: var(--linkbrary-bg);
    color: var(--linkbrary-primary-color);
  }

  &:hover ${CheckImg} {
    display: inline;
  }
`;

const Count = styled.span`
  color: var(--linkbrary-gray-60);
  font-size: 14px;
  margin-left: 8px;
`;
