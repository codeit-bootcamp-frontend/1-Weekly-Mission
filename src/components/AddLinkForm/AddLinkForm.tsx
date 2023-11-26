import { ChangeEvent, useState } from 'react';
import linkIcon from 'images/link.svg';
import * as S from './AddLinkForm.style';

interface Props {
  isScrolled: boolean;
}

function AddLinkForm({ isScrolled }: Props) {
  const [value, setValue] = useState('');

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <S.FormContainer $isScrolled={isScrolled}>
      <S.Form>
        <S.Input
          value={value}
          onChange={handleValueChange}
          placeholder='링크를 추가해 보세요'
        />
        <S.Img src={linkIcon} alt='링크 아이콘' />
        <S.Button>추가하기</S.Button>
      </S.Form>
    </S.FormContainer>
  );
}

export default AddLinkForm;
