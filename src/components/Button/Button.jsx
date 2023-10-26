import { CTA } from "./styles"

const Button = ({ size, link, text }) => {
  console.log(size)
  return (
    <CTA size={size} href={link}>
      <span>{text}</span>
    </CTA>
  )
}

export default Button
