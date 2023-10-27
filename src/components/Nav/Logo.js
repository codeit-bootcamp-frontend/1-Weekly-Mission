import { Link } from 'react-router-dom'
import './Logo.css'

function Logo({ src = '', alt = '' }) {
  return (
    <Link className="grid--logo" to='/'>
      <img className="logo" src={src} alt={alt} />
    </Link>
  )
}

export default Logo