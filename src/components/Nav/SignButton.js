import "./SignButton.css"

function SignButton({ size, children, loadUser, onClick }) {
  const handleLoadUser = (e) => {
    e.preventDefault();
    loadUser();
    onClick(true);
  }
  return (
    <a className={`sign sign--${size} grid--sign`} href="." onClick={handleLoadUser}>{children}</a>
  )
}

export default SignButton