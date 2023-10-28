import { Link } from 'react-router-dom'
import S from '../styled'

const grid = {
  gridArea: 'logo',
}

function Logo({ src = '', alt = '' }) {
  return (
    <Link style={grid} to='/'>
      <S.ImgLogo src={src} alt={alt} />
    </Link>
  )
}

export default Logo