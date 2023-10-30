import { useSearchParams } from 'react-router-dom';
import styles from './FolderNav.module.css';

function FolderNav({ folderLists, onClick }) {
  return (
    <ul className={styles.root}>
      <li className={styles.li}>
        <button
          type="submit"
          name="search"
          onClick={onClick}
          className={styles.a}
        >
          전체
        </button>
      </li>
      {folderLists.map(({ id, name }) => {
        return (
          <li className={styles.li} key={id}>
            <button
              name="folderid"
              type="submit"
              value={id}
              onClick={onClick}
              className={styles.a}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FolderNav;
