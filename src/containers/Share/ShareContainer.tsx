import React from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import CardList from '../../components/Card/CardList';
import { SampleFolderItem } from '../../apis/fetch';
import * as S from './styles';

interface OwnerProps {
  items: {
    name: string;
    owner: {
      name: string;
      profileImageSource: string;
    };
  };
}

interface ShareContainerProps {
  shareData: {
    folder: SampleFolderItem;
  };
}

const Owner = ({ items }: OwnerProps) => {
  const { name, owner } = items;

  return (
    <S.OwnerContainerBox>
      <S.OwnerInnerContainerBox>
        <img src={owner.profileImageSource} alt="User Profile" />
        <S.OwnerNameParagraph>@{owner.name}</S.OwnerNameParagraph>
        <S.OwnerFolderParagraph>{name}</S.OwnerFolderParagraph>
      </S.OwnerInnerContainerBox>
    </S.OwnerContainerBox>
  );
};

const ShareContainer = ({ shareData }: ShareContainerProps) => {
  const handleSearchbar = (searchedText: string) => {};

  const { folder } = shareData;
  return (
    <>
      <Owner items={folder} />
      <S.ShareBox>
        <Searchbar handleSearch={handleSearchbar} />
        <CardList cards={folder?.links} />
      </S.ShareBox>
    </>
  );
};

export default ShareContainer;
