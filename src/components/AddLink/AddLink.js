import styles from "./AddLink.module.css";
import AddLinkInput from "./AddLinkInput";

const AddLink = () => {
  return (
    <div className={styles.addLink}>
      <AddLinkInput />
    </div>
  );
};

export default AddLink;
