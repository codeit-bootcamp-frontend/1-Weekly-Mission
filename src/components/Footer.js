import '../styles/footer.css';

import faceboockIcon from '../assets/images/akar-icons_facebook-fill.svg';
import twitterIcon from '../assets/images/akar-icons_twitter-fill.svg';
import youtubeIcon from '../assets/images/akar-icons_youtube-fill.svg';
import instaIcon from '../assets/images/ant-design_instagram-filled.svg';

const FACEBOOK_URL = "https://www.facebook.com/";
const TWITTER_URL = "https://twitter.com/";
const YOUTUBE_URL = "https://www.youtube.com/";
const INSTA_URL = "https://www.instagram.com/";

function Footer(){
    return (
        <div className = "footer_container">
            <div className = "sources">©codeit - 2023</div>
            <div className = "ppf">
                <a href="/privacy">Privacy Policy</a>
                <a href="/faq">FAQ</a>
            </div>
            <div className = "link_icon">
                <a href = {FACEBOOK_URL} target = "_blank"><img alt = "facebook 바로가기" src = {faceboockIcon} /></a>
                <a href = {TWITTER_URL} target = "_blank"><img alt = "twitter 바로가기" src = {twitterIcon} /></a>
                <a href = {YOUTUBE_URL} target = "_blank"><img alt = "youtube 바로가기" src = {youtubeIcon} /></a>
                <a href = {INSTA_URL} target = "_blank"><img alt = "instagram 바로가기" src = {instaIcon} /></a>
            </div>
        </div>
    );
}

export default Footer;