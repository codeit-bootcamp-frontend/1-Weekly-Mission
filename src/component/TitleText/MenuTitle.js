import { MenuTitleButton } from "./MenuTitleButton.js";

export function MenuTitle({ title }) {
  return (
    <div className="menu-title-box">
      <span>{title}</span>
      <div>
        <MenuTitleButton />
      </div>
    </div>
  );
}
