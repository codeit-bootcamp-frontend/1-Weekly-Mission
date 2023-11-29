import DeleteButton from "src/components/SelectMenu/DeleteButton";
import FolderAddButton from "src/components/SelectMenu/FolderAddButton";
import styles from "src/components/SelectMenu/SelectMenu.module.css";

function SelectMenu({ onClick, url }: KebabButtonProps) {
  return (
    <div className={styles.selectMenu}>
      <DeleteButton onClick={onClick} url={url} />
      <FolderAddButton onClick={onClick} />
    </div>
  );
}

export default SelectMenu;
