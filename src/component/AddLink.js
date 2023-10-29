import style from "./AddLink.module.css";
import linkIcon from "../assets/img/link.svg";
function AddLink() {
  return (
    <div className={style.root}>
      <div className={style.section}>
        <img src={linkIcon} alt="링크 아이콘" />
        <input placeholder="링크를 추가해 보세요."></input>
      </div>

      <button className={style.button}>추가하기</button>
    </div>
  );
}
export default AddLink;
