/* 폴더 안에 들어있는 카드들을 리스트로 보여주는 컴포넌트 */

/* css 모듈 방식 적용
 */

import Card from "commons/components/Card/Card";
import styles from "./CardList.module.css";

function CardList({ cardList }) {
  if (!cardList) {
    return <div className={styles["no-card-list"]}> 잘못된 접근입니다.</div>;
  }
  if (cardList.length === 0) {
    return (
      <div className={styles["no-card-list"]}> 저장된 링크가 없습니다.</div>
    );
  }
  return (
    <section className={styles["card-section"]}>
      {cardList.map((card) => {
        return (
          <div key={card.id}>
            <Card card={card} />
          </div>
        );
      })}
    </section>
  );
}

export default CardList;
