import * as S from "./styles"

const Button = ({ size, link, text }) => {
  return (
    <S.CTA size={size} href={link}>
      <span>{text}</span>
    </S.CTA>
  )
}

export default Button
