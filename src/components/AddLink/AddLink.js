import styles from "./AddLink.module.css";
import AddLinkInput from "./AddLinkInput";

const AddLink = () => {
  return (
    <div className={styles.AddLink}>
      <AddLinkInput />
    </div>
  );
};

export default AddLink;
