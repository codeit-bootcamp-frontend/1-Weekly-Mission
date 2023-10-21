import Card from './Card';

function CardList({ links = [] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Card data={link} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
