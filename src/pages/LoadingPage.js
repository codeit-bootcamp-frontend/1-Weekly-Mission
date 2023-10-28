import Spinner from "../assets/img/pacMan.gif";
import style from "./LoadingPage.module.css";
function LoadingPage() {
  return (
    <div className={style.root}>
      <div className={style.title}>잠시만 기다려 주세요...</div>
      <img src={Spinner} alt="로딩 스피너" className={style.spinner} />
    </div>
  );
}
export default LoadingPage;
