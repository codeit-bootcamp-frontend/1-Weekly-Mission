import React from "react";
import facebookLogo from "../images/footer/facebook.svg";
import twitterLogo from "../images/footer/twitter.svg";
import youtubeLogo from "../images/footer/youtube.svg";
import instagramLogo from "../images/footer/instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<span className="footer__company">©codeit - 2023</span>

			<div className="footer__support">
				<a className="footer__support-link" href="/support/privacy">
					Privacy Policy
				</a>
				<a className="footer__support-link" href="/support/faq">
					FAQ
				</a>
			</div>

			<div className="footer__social">
				<a className="footer__social-link" href="https://facebook.com" target="_blank" rel="noreferrer">
					<img className="footer__social-icon" src={facebookLogo} alt="페이스북" />
				</a>
				<a className="footer__social-link" href="https://twitter.com" target="_blank" rel="noreferrer">
					<img className="footer__social-icon" src={twitterLogo} alt="트위터" />
				</a>
				<a className="footer__social-link" href="https://youtube.com" target="_blank" rel="noreferrer">
					<img className="footer__social-icon" src={youtubeLogo} alt="유튜브" />
				</a>
				<a className="footer__social-link" href="https://instagram.com" target="_blank" rel="noreferrer">
					<img className="footer__social-icon" src={instagramLogo} alt="인스타그램" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
