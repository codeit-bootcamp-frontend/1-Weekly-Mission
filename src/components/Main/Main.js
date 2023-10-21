import searchIcon from "./Search_icon.svg";
import Cards from '../Card/Card';
import './Main.css';
import '../../globalStyles.css'


const Main = ( {folder} ) => {
  return (
    <main>
      <form>
        <input 
          className="search" 
          name="searchKeyword" 
          type="search" 
          autoComplete="on"
          required placeholder="링크를 검색해 보세요.">
        </input>  {/*돋보기 아이콘 삽입해야 함*/}
      </form>
      <content>
        <Cards folderCards={folder.links}/>
      </content>
    </main>
  )
}

export default Main;