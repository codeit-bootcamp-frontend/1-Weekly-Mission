import * as S from "./styles"

const Button = ({ size, text }) => {
  return (
    <S.CTA size={size}>
      <span>{text}</span>
    </S.CTA>
  )
}

export default Button
