import { useState, useCallback } from "react";
import Modal from "../Modal/Modal.js";
import { ThemeProvider } from "styled-components";
import theme from "../../css/display.js";
import { Card } from "./Card.js";

import {ReactComponent as AddImg} from '../../assets/add.svg'
import * as S from "./CardContainer.style.js";

export function CardContainer ({items, active}) {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = useCallback(() => {
    setVisible(true);
  },[visible])

  return (
    <>
      <ThemeProvider theme={theme}>
        <S.Container>
          {items.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </S.Container>
        {active && <S.Button onClick={handleButtonClick}>
          폴더 추가 <AddImg alt="폴더추가" fill="#e7effb" />
        </S.Button>}
      </ThemeProvider>
      {visible && <Modal onClose={setVisible} type={'폴더 추가'} />}
    </>
  )
}