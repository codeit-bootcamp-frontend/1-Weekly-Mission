import React, { useState } from "react";
import ConfirmModal from "../../common/modal/ConfirmModal";
import linkCopy from "../../assets/images/linkcopy.svg";

export default function ClipCopy() {
  const yesConfirm = () => {
    alert(`복사하였습니다 `);
  };

  const noConfirm = () => {
    alert("복사를 취소하셨네요");
  };
  const confirmClick = ConfirmModal(
    "url를 복사하시겠습니까?",
    yesConfirm,
    noConfirm
  );
  const [isCopied, setIsCopied] = useState(false);

  const toClipboard = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(window.location.href).then((response) => {
        // setLink(window.location.href); static media로 나옴..?
        confirmClick();
      });
      setIsCopied(true);
      return;
    }
    setIsCopied(false);
  };
  return <img src={linkCopy} alt="link_copy" onClick={toClipboard} />;
}
