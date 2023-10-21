import './Logo.css'

function Logo({ src = '', alt = '' }) {
  return (
    <a className="grid--logo">
      <img className="logo" src={src} alt={alt} />
    </a>
  )
}

export default Logo