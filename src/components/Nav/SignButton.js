import { getData } from "../../utils/api";
import "./SignButton.css"

function SignButton({ size, page, type, children, dispatch, onClick = () => { } }) {
  const handleLoadUser = async (e) => {
    e.preventDefault();
    dispatch(await getData(page, type))
    onClick(true);
  }
  return (
    <a className={`sign sign--${size} grid--sign`} href="." onClick={handleLoadUser}>{children}</a>
  )
}

export default SignButton