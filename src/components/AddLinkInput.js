import { useState } from "react";
import styles from "../styles/AddLinkInput.module.css";
import chainIcon from "../assets/chain.svg";
import AddLinkButton from "./AddLinkButton";

const AddLinkInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className={styles.AddLinkInput} onSubmit={handleSubmit}>
      <img className={styles.chain_icon} src={chainIcon} alt="돋보기 모양 아이콘" />
      <input
        className={styles.input}
        name="addLink"
        placeholder="링크를 추가해 보세요"
        value={inputValue}
        onChange={handleChange}
      />
      <AddLinkButton />
    </form>
  );
};

export default AddLinkInput;
