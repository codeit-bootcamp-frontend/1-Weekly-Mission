import React from 'react'
import * as S from './MainStyle'

function Main({ children }) {
  return (
    <S.MainContainer>
      <S.MainContent>{children}</S.MainContent>
    </S.MainContainer>
  )
}

export default Main
