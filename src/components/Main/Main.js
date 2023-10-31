import SearchBar from "./SearchBar"
import FolderSelect from "./FolderSelect"
import CardList from "./CardList";
import S from "../styled";

function Main({ page, type, isUser }) {

  return (
    <S.Main>
      <SearchBar />
      {page === 'folder' && isUser && <FolderSelect />}
      {page === 'folder' ?
        (isUser ? <CardList page={page} type={type} />
          : <S.DivEmpty>로그인 정보를 찾을 수 없습니다.</S.DivEmpty>)
        : <CardList page={page} type={type} />}
    </S.Main>
  )
}

export default Main