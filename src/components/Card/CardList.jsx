import Card from "./Card.jsx"
import { CardListBox } from "./styles.js"

const CardList = ({ cards }) => {
  return (
    <CardListBox>
      {cards && cards.map((card) => <Card key={card.id} items={card} />)}
    </CardListBox>
  )
}

export default CardList
