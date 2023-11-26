import React from 'react';
import * as S from './styles';

const NoLink = () => {
  return (
    <S.NoLinkBox>
      <S.NoLinkInnerBox>
        <S.NoLinkParagraph>저장된 링크가 없습니다</S.NoLinkParagraph>
      </S.NoLinkInnerBox>
    </S.NoLinkBox>
  );
};

export default NoLink;
