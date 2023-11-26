import React, { FormEvent } from 'react';
import Button from '../Button/Button';
import IMAGES from '../../assets/images';

import * as S from './styles';

type HandleSubmitProps = FormEvent<HTMLFormElement>;

const Addlink = () => {
  const handleSubmit = (e: HandleSubmitProps) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <S.AddLinkOuterBox>
        <S.AddLinkBox>
          <S.AddLinkInputBox>
            <S.AddLinkInputInnerBox>
              <S.AddLinkImage src={IMAGES.link} alt="Link" />
              <S.AddLinkContentInput placeholder="링크를 추가해 보세요" />
            </S.AddLinkInputInnerBox>
            <Button size="short" text="추가하기" buttonColor="blue" />
          </S.AddLinkInputBox>
        </S.AddLinkBox>
      </S.AddLinkOuterBox>
    </form>
  );
};

export default Addlink;
