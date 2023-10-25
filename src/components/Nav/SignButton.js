import "./SignButton.css"

function SignButton({ size, children, loadUser }) {
  const handleLoadUser = (e) => {
    e.preventDefault();
    loadUser();
  }
  return (
    <a className={`sign sign--${size} grid--sign`} href="." onClick={handleLoadUser}>{children}</a>
  )
}

export default SignButton