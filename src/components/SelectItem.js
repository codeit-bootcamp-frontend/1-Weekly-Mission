import "../styles/SelectItem.css";
import { useState } from "react";

function SelectItem({ item, handleRenderItems }) {
  const [activeBtn, setActiveBtn] = useState([]);

  const onClick = () => {
    setActiveBtn(item.name);
    handleRenderItems(item.id);
  };
  return (
    <div className="SelectItem">
      <button
        value={item.name}
        className={item.name === activeBtn ? `active` : ""}
        onClick={onClick}
      >
        {item.name}
      </button>
    </div>
  );
}

export default SelectItem;
