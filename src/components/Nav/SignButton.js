import S from "../styled";

function SignButton({ children, onClick }) {

  return (
    <S.SignButton href="." onClick={onClick}>{children}</S.SignButton>
  )
}

export default SignButton