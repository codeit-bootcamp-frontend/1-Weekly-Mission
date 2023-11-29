import { useState } from "react";
import { AddToFolder, ShareOnSns } from "component";
import * as Style from "./Modal.style.js";

export default function ModalForm ({subTitle, option}) {
  const { input, button, trigger} = option
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const InputValue = e.target.value;
    setValue(InputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(input){}
  };

  return (
    <>
      <Style.Form onSubmit={handleSubmit}>
        {input ? 
          <Style.Input
            placeholder={subTitle}
            value={value}
            onChange={handleInputChange}
          />
        : <span>{subTitle}</span>}
        {trigger === "AddToFolder" && <AddToFolder />}
        {trigger === "ShareOnSns" && <ShareOnSns />} 
        {button && (
          <Style.Button color={button.color} >{button.title}</Style.Button>
        )}
      </Style.Form>
    </>
  )
}
