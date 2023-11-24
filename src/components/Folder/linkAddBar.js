import "../../styles/navheader.css";
import "../../styles/reset.css";
import styled from "styled-components";
import linkAdd from "../../images/link.svg";

import { useState } from "react";

export default function LinkAddBar({ openMAF, show }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => setText(e.target.value);
  const handleTypingUrl = (e) => openMAF(e, text);
  return (
    <header className=" folder-header">
      <LinkAddBackground $show={show}>
        <div className="linkAdd-bar-wrapper">
          <input
            name="text"
            value={text}
            className="linkAdd-bar"
            placeholder="링크를 추가해보세요"
            onChange={handleChangeText}
          />

          <img src={linkAdd} className="linkAdd-bar-image" alt=" " />
          <button onClick={handleTypingUrl} className="cta cta-short" href="/">
            <span>추가하기</span>
          </button>
        </div>
      </LinkAddBackground>
    </header>
  );
}

const LinkAddBackground = styled.div`
  width: 1440px;
  background-color: #f0f6ff;
  z-index: 1000;
  margin: 0 auto;

  position: ${({ $show }) => ($show ? "fixed" : "")};
  bottom: ${({ $show }) => ($show ? "0" : "")};
`;
