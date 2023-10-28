import { NavLink } from 'react-router-dom';
import styles from './FolderNav.module.css';

function FolderNav({ folderLists }) {
  function getLinkStyle({ isActive }) {
    return {
      color: isActive ? 'var(--white)' : '',
      backgroundColor: isActive ? 'var(--primary)' : '',
    };
  }

  return (
    <ul className={styles.root}>
      <li className={styles.li}>
        <NavLink to="/folder" className={styles.a}>
          전체
        </NavLink>
      </li>
      {folderLists.map(({ id, name }) => {
        return (
          <li className={styles.li} key={id}>
            <NavLink
              to={`/folder/${id}`}
              className={styles.a}
              style={getLinkStyle}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default FolderNav;
