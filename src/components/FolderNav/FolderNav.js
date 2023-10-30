import styles from './FolderNav.module.css';

function FolderNav({ folderLists, onClick, folderID }) {
  return (
    <ul className={styles.root}>
      {folderLists.map(({ id, name }) => {
        const isSelected =
          Number(folderID) === id
            ? `${styles.button} ${styles.selected}`
            : `${styles.button}`;

        return (
          <li className={styles.li} key={id}>
            <button
              name="folderId"
              type="button"
              value={id}
              onClick={onClick}
              className={isSelected}
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
