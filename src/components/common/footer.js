import './footer.css'
import facebookIcon from '../../assets/images/facebook-fill.png'
import twitterIcon from '../../assets/images/twitter-fill.png'
import youtubeIcon from '../../assets/images/youtube-fill.png'
import instagramIcon from '../../assets/images/instagram-filled.png'


function Footer() {
    return (
        <div className='footer-box'>
            <div className='copyright'>
                ©codeit - 2023
            </div>
            <div className="faq">
                <a href="privacy.html">
                    <div className="faq-PP">
                        Privacy Policy
                    </div>
                </a>
                <a href="faq.html">
                    <div className="faq-FAQ">
                        FAQ
                    </div>
                </a>
            </div>
            <div className="sns">
                <a href="https://www.facebook.com/" ><img src={facebookIcon} alt='facebook'/></a>
                <a href="https://twitter.com/"><img src={twitterIcon} alt='twitter'/></a>
                <a href="https://www.youtube.com/"><img src={youtubeIcon} alt='youtube'/></a>
                <a href="https://www.instagram.com/"><img src={instagramIcon} alt='instagram'/></a>
            </div>
        </div>
    )
}        

export default Footer;