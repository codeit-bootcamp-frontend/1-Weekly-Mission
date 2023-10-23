import { Nav } from "./Nav.js";
import { HeadSection } from "./HeadSection.js";

export function Header({profile, items}) {

  return (
    <>
      <Nav profile={profile}/>
      <HeadSection items={items}/>
    </>
  );
}
