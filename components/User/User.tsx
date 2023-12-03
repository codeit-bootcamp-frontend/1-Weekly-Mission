import { useEffect, useState } from 'react';
import * as S from './User.style';

interface IFolder {
  name: string;
  folderName: string;
  profileImageSource: string;
}

const User = ({ name, folderName, profileImageSource }: IFolder) => {
  return (
    <S.Container>
      <S.Profile src={profileImageSource} />
      <S.Name>{name}</S.Name>
      <S.FolderName>{folderName}</S.FolderName>
    </S.Container>
  );
};

export default User;
