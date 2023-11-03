import * as Modal from '../Modal.style';
import * as S from './AddToFolder.style';
import Layout from '../Layout';

function AddToFolder({ closeModal }) {
  return (
    <Layout closeModal={closeModal}>
      <Modal.Header>
        <Modal.Title>폴더에 추가</Modal.Title>
        <Modal.Description>링크 주소</Modal.Description>
      </Modal.Header>
      <S.FoldersContainer>
        <S.Folder>
          <S.FolderTitle>코딩팁</S.FolderTitle>
          <S.FolderDescription>7개 링크</S.FolderDescription>
        </S.Folder>
        <S.Folder>
          <S.FolderTitle>채용 사이트</S.FolderTitle>
          <S.FolderDescription>12개 링크</S.FolderDescription>
        </S.Folder>
      </S.FoldersContainer>
      <Modal.BigButton>추가하기</Modal.BigButton>
    </Layout>
  );
}

export default AddToFolder;
