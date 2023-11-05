import styles from './FolderNav.module.css';

function FolderNav({ folderLists, onClick, folderID }) {
  const lists = [
    {
      id: 0,
      name: '전체',
    },
    ...folderLists,
  ];
  return (
    <ul className={styles.root}>
      {lists.map(({ id, name }) => {
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
