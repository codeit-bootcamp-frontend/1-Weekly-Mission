import Card from './Card';

export default function CardList({ items }) {
  return (
    <>
      <div className='cardContainer'>
        {items &&
          items.map(item => {
            return <Card key={item.id} item={item} />;
          })}
      </div>
    </>
  );
}
