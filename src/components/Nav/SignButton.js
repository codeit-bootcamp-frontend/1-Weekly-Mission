import { getData } from "../../utils/api";
import S from "../styled";

function SignButton({ page, type, children, dispatch, onClick = () => { } }) {
  const handleLoadUser = async (e) => {
    e.preventDefault();
    dispatch(await getData(page, type))
    onClick(true);
  }
  return (
    <S.SignButton href="." onClick={handleLoadUser}>{children}</S.SignButton>
  )
}

export default SignButton