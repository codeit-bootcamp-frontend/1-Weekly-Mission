import { fetchGet } from "../../apis/api";
import searchIcon from "../../assets/Search.png";

const Searchbar = () => {
  const getSample = async () => {
    const result = await fetchGet("/api/sample/folder");
  };
  return (
    <div>
      <div>
        <label htmlFor="search" />
        <img src={searchIcon} />
        <input
          id="search"
          name="search"
          placeholder="링크를 검색해 보세요"
          autoFocus
        />
      </div>
      <div>X</div>
    </div>
  );
};

export default Searchbar;
