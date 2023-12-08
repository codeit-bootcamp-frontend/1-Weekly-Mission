import { RefObject } from 'react';
import * as S from './AddLinkContainer.style';
import { useState } from 'react';
import useModal from '@/hooks/useModal';
import { IconLink } from '@/public/svgs';
import Button from '@/components/Button';

interface Props {
  userId: number;
  addLinkRef: RefObject<HTMLDivElement>;
  float: boolean;
}

function AddLinkContainer({ userId, addLinkRef, float }: Props) {
  const [url, setUrl] = useState('');

  const [modal, setModal] = useModal({ url: url, userId: userId });

  const setAddToFolderModal = () => {
    setModal('addToFolder');
  };

  return (
    <>
      <S.Container ref={addLinkRef}>
        <S.Inner>
          <S.Img>
            <IconLink />
          </S.Img>
          <S.Input
            placeholder='링크를 추가해 보세요'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <S.ButtonContainer>
            <Button onClick={setAddToFolderModal}>추가하기</Button>
          </S.ButtonContainer>
        </S.Inner>
      </S.Container>

      {float && (
        <S.FloatContainer ref={addLinkRef}>
          <S.Inner>
            <S.Img>
              <IconLink />
            </S.Img>
            <S.Input
              placeholder='링크를 추가해 보세요'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <S.ButtonContainer>
              <Button onClick={setAddToFolderModal}>추가하기</Button>
            </S.ButtonContainer>
          </S.Inner>
        </S.FloatContainer>
      )}
      {modal}
    </>
  );
}

export default AddLinkContainer;
