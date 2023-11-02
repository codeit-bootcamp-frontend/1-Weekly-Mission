import { Search } from "./Search.js";
import { Card } from "./Card.js";

export function Article({items}) {
  const {links} = items

  return (
    <div className="article">
      <div className="article-section">
        <Search />
        <div className="card-container">
          {links.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
