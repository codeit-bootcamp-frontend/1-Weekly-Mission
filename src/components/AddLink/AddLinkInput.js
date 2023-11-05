import styles from "./AddLinkInput.module.css";
import chainIcon from "../../assets/chain.svg";

const AddLinkInput = ({ inputValue, onChange, children }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.addLinkInput} onSubmit={handleSubmit}>
      <img className={styles.chain_icon} src={chainIcon} alt="돋보기 모양 아이콘" />
      <input
        className={styles.input}
        name="addLink"
        placeholder="링크를 추가해 보세요"
        value={inputValue}
        onChange={handleChange}
      />
      {children}
    </form>
  );
};

export default AddLinkInput;
