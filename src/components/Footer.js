import React from 'react';
import './footer.css';
import facebookImg from '../img/png/Vector-1.png';
import twitterImg from '../img/png/Vector-2.png';
import youtubeImg from '../img/png/Vector-3.png';
import melonImg from '../img/png/Vector-4.png';


const Footer = () => {
    return (
        <footer>
            <div className="footer-connect">
                <div className="footer-connect-year">codeit - 2023</div>
                <ul className="footer-connect-faq">
                    <li><a href="none">Privacy Policy</a></li>
                    <li><a href="none">FAQ</a></li>
                </ul>
                <ul className="footer-connect-sns">
                    <li>
                        <a href="https://www.facebook.com/" target="blank">
                            <img src={facebookImg} alt="페이스북"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="blank">
                            <img src={twitterImg} alt="트위터"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="blank">
                            <img src={youtubeImg} alt="유튜브"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.melon.com/" target="blank">
                            <img src={melonImg} alt="멜론"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;