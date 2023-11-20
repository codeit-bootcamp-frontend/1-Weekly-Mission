import { FOLDER_OPTION_NAMES } from '../../constants/constant';
import * as S from './styles';

const FolderOptionsItem = ({ item }) => {
  const { name, optionImg } = item;
  return (
    <S.FolderOptionItemBox>
      <img src={optionImg} alt="option" />
      <p>{name}</p>
    </S.FolderOptionItemBox>
  );
};

// "공유", "이름 변경", "삭제"
const FolderOptions = () => {
  return (
    <S.FolderOptionsBox>
      {FOLDER_OPTION_NAMES.map((item) => (
        <FolderOptionsItem key={item.id} item={item} />
      ))}
    </S.FolderOptionsBox>
  );
};

const FolderMenubar = ({ selectedFolderName }) => {
  return (
    <>
      <S.FolderNameHeader>{selectedFolderName}</S.FolderNameHeader>
      {selectedFolderName !== '전체' ? <FolderOptions /> : null}
    </>
  );
};

export default FolderMenubar;
