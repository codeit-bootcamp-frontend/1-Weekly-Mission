import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-connect">
                <div class="footer-connect-year">codeit - 2023</div>
                <ul class="footer-connect-faq">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <ul class="footer-connect-sns">
                    <li>
                        <a href="https://www.facebook.com/" target="blank">
                            <img src="img/png/Vector-1.png" alt="페이스북"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="blank">
                            <img src="img/png/Vector-2.png" alt="트위터"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="blank">
                            <img src="img/png/Vector-3.png" alt="유튜브"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.melon.com/" target="blank">
                            <img src="img/png/Vector-4.png" alt="멜론"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;