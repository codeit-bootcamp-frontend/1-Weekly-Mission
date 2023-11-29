import styles from "src/components/FolderForm/FolderForm.module.css";

interface FolderType {
  name: string;
  onClick: () => void;
}

function FolderForm({ name, onClick }: FolderType) {
  return (
    <button className={styles.folderName} onClick={onClick}>
      {name}
    </button>
  );
}

export default FolderForm;
