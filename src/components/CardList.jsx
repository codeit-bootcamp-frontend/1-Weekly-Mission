import Card from './Card';

function CardList({ items }) {
  return (
    <>
      <div className="card-list">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })}
      </div>
    </>
  );
}

export default CardList;
