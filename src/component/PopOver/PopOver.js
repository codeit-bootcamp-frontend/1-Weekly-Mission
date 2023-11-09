import { useState } from 'react';
import * as S from './PopOver.style.js'

const PopOver = () => {
  const[active, setActive] = useState(false);
 
  const handleMouse = () => {
    if (!active) setActive(true)
    else setActive(false)
  }

  return (
    <S.Container>
      <S.Element onMouseEnter={handleMouse} onMouseLeave={handleMouse} active={active}>삭제하기</S.Element>
      <S.Element onMouseEnter={handleMouse} onMouseLeave={handleMouse} active={active}>폴더에 추가</S.Element>
    </S.Container>
  )
}

export default PopOver;