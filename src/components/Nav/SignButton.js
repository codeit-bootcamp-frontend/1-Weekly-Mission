import "./SignButton.css"

function SignButton({ size, children }) {
  return (
    <a className={`sign sign--${size} grid--sign`} href=".">{children}</a>
  )
}

export default SignButton