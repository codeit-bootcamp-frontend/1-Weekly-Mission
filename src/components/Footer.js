import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
import instagram from '../assets/images/instagram.svg';
import '../styles/Footer.css';

const sns = [
  {
    href: 'https://www.facebook.com/',
    src: facebook,
    alt: 'facebook',
  },
  {
    href: 'https://twitter.com/',
    src: twitter,
    alt: 'twitter',
  },
  {
    href: 'https://www.youtube.com/',
    src: youtube,
    alt: 'youtube',
  },
  {
    href: 'https://www.instagram.com/',
    src: instagram,
    alt: 'instagram',
  },
];

const FooterSns = ({ href, src, alt }) => {
  return (
    <a href={href} className='sns'>
      <img src={src} alt={alt} />
    </a>
  );
};

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-box'>
        <div className='footer-trademark'>©codeit - 2023</div>
        <div className='footer-nav'>
          <a href='/Privacy' className='footer-nav-link'>
            Privacy Policy
          </a>
          <a href='FAQ' className='footer-nav-link'>
            FAQ
          </a>
        </div>
        <div className='footer-sns'>
          {sns.map((sns) => (
            <FooterSns {...sns} key={sns.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
}
