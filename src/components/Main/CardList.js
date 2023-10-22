import Card from './Card';

function CardList({ links }) {
  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    links.map((link, index) => { return <Card key = {index} link={link} />})
  );
}

export default CardList;
