import { Link } from "react-router-dom";
import { Button } from "./CardMenuBar.style";

export function CardButton({ folder, setTitle }) {
  const { id, name } = folder;
  const path = `/folder/${id}`;

  const handleClick = (e) => {
    setTitle(`${name}`)
  };

  return (
    <Link to={path}>
      <li>
        <Button onClick={handleClick}>
          {name}
        </Button>
      </li>
    </Link>
  );
}
