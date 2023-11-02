import "./FolderHero.css";
import LinkImg from "../../../assets/image/link.svg";
function FolderHero() {
  return (
    <section className="hero--folder">
      <div className="container">
        <div className="div-link">
          <div>
            <span>
              <img src={LinkImg} alt="link icon" />
            </span>
          </div>
          <div className="link_container">
            <button className="link_button">추가하기</button>
          </div>
        </div>
        <input className="input-link" placeholder="링크를 추가해 보세요" />
      </div>
    </section>
  );
}

export default FolderHero;
