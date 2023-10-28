import "../styles/SelectItem.css";
import { useState } from "react";

function SelectItem({ item, handleRenderItems, toggleDisplay }) {
  const [activeBtn, setActiveBtn] = useState(false);

  const toggleActive = () => {
    setActiveBtn((prev) => {
      return !prev;
    });
  };

  const onClick = () => {
    handleRenderItems(item.id);
    toggleActive();
    toggleDisplay();
  };

  return (
    <button
      value={item.name}
      className={"SelectItem" + (activeBtn ? " active" : "")}
      onClick={onClick}
    >
      {item.name}
    </button>
  );
}

export default SelectItem;
