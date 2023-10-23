import { Search } from "./Search.js";
import { Card } from "./Card.js";
export function Article({ items }) {
  const links = items.links;

  return (
    <div>
      <Search />
      <div className='card-container'>
        {links.map((link) => (
          <Card link={link} key={link.id}/>
        ))}
      </div>
    </div>
  );
}
