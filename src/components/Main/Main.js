import SearchBar from "./SearchBar"
import './Main.css'
import FolderSelect from "./FolderSelect"
import CardList from "./CardList";
import styled from "styled-components";


const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
`

function Main({ page, type, isUser }) {

  return (
    <main className="main">
      <SearchBar />
      {page === 'folder' && isUser && <FolderSelect />}
      {page === 'folder' ?
        (isUser ? <CardList page={page} type={type} />
          : <Empty>로그인 정보를 찾을 수 없습니다.</Empty>)
        : <CardList page={page} type={type} />}
    </main>
  )
}

export default Main