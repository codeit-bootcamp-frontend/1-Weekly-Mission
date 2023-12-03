import styles from '@/styles/searchBar.module.css';
import SearchIcon from '@/public/images/search.svg';

function SearchBar(): JSX.Element {
  return (
    <>
      <form className={styles.search_form}>
        <img className={styles.search_icon} src={SearchIcon} alt="검색 아이콘" />
        <input className={styles.search_bar} type="text" placeholder="링크를 검색해 보세요." />
      </form>
    </>
  );
}

export default SearchBar;
