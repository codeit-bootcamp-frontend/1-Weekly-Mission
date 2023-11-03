import React from "react";
import metachat from "../../assets/images/metachat.svg";

export default function Meta() {
  const shareFaceBook = () => {
    const local = window.location.href;
    window.open(`http://www.facebook.com/sharer.php?u=${local}`);
  };
  return <img src={metachat} alt="meta_chat" onClick={shareFaceBook} />;
}
