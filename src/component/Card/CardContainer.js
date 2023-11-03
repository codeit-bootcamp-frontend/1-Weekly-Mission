import { ThemeProvider } from "styled-components";
import theme from "../../css/display.js";
import * as S from "./CardContainer.style.js";
import { Card } from "./Card.js";
import {ReactComponent as AddImg} from '../../assets/add.svg'

export function CardContainer ({items, active}) {
  
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        {items.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </S.Container>
      {active && <S.Button>
        폴더 추가 <AddImg alt="폴더추가" fill="#e7effb" />
      </S.Button>}
    </ThemeProvider>
  )
}