import ImageLink from '../../components/ImageLink/ImageLink';
import './Footer.style.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p>@Codeit - 2023</p>
      <div>
        <a href='/'>Privacy Policy</a>
        <a href='/'>FAQ</a>
      </div>
      <div className='icons'>
        <ImageLink site='facebook' />
        <ImageLink site='twitter' />
        <ImageLink site='instagram' />
        <ImageLink site='youtube' />
      </div>
    </div>
  );
}
