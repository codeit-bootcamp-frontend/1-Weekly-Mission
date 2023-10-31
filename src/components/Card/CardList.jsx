import Card from "./Card.jsx"
import * as S from "./styles.js"

const CardList = ({ cards }) => {
  return (
    <S.CardListBox>
      {cards && cards.map((card) => <Card key={card.id} items={card} />)}
    </S.CardListBox>
  )
}

export default CardList
