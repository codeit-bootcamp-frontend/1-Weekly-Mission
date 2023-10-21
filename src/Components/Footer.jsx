import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import instagramIcon from '../assets/icons/instagram.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__copyright'>
          <span>©codeit - 2023</span>
        </div>

        <div className='footer__extra-page'>
          <a href='/pages/privacy.html' className='footer__link'>
            Privacy Policy
          </a>
          <a href='/pages/faq.html' className='footer__link'>
            FAQ
          </a>
        </div>

        <div className='footer__sns'>
          <div className='footer__sns-logo'>
            <a href='http://facebook.com' target='_blank'>
              <img src={facebookIcon} alt='페이스북 로고' />
            </a>
          </div>
          <div className='footer__sns-logo'>
            <a href='http://twitter.com' target='_blank'>
              <img src={twitterIcon} alt='트위터 로고' />
            </a>
          </div>
          <div className='footer__sns-logo'>
            <a href='http://youtube.com' target='_blank'>
              <img src={youtubeIcon} alt='유튜브 로고' />
            </a>
          </div>
          <div className='footer__sns-logo'>
            <a href='http://instagram.com' target='_blank'>
              <img src={instagramIcon} alt='인스타그램 로고' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
