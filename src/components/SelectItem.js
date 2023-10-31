import "../styles/SelectItem.css";
import { useState } from "react";

function SelectItem({ item, handleClickUpdate }) {
  const [activeBtn, setActiveBtn] = useState(false);

  const toggleActive = () => {
    setActiveBtn((prev) => {
      return !prev;
    });
  };

  const handleBtnUpdate = () => {
    handleClickUpdate(item.name, item.id);
    toggleActive();
  };

  return (
    <button
      name={item.name}
      className={"SelectItem" + (activeBtn ? " active" : "")}
      onClick={handleBtnUpdate}
      id={item.id}
    >
      {item.name}
    </button>
  );
}

export default SelectItem;
