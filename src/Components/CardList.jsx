import Card from 'components/Card';

function CardList({ links = [] }) {
  return (
    <ul className='card-container'>
      {links.map((link) => (
        <li key={link.id}>
          <Card data={link} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
