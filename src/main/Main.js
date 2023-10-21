import "./Main.css";
import Card from "../card/card";

const Main = () => {
  return (
    <main>
      <div className="content_wrapper">
        {/* 추후 input으로 수정 예정 */}
        <form>
          <input
            id="search"
            name="search"
            type="search"
            placeholder="링크를 검색해 보세요."
          />
        </form>
        <div className="card_wrapper"></div>
      </div>
    </main>
  );
};

export default Main;
