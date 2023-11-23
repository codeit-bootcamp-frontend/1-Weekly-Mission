import React from "react";
import "./footer.css";
import facebookImg from "../img/png/Vector-1.png";
import twitterImg from "../img/png/Vector-2.png";
import youtubeImg from "../img/png/Vector-3.png";
import melonImg from "../img/png/Vector-4.png";

const SNS = [
  { title: "페이스북", image: facebookImg, link: "https://www.facebook.com/" },
  { title: "트위터", image: twitterImg, link: "https://twitter.com/" },
  { title: "유튜브", image: youtubeImg, link: "https://www.youtube.com/" },
  { title: "멜론", image: melonImg, link: "https://www.melon.com/" },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-connect">
        <div className="footer-connect-year">codeit - 2023</div>
        <ul className="footer-connect-faq">
          <li>
            <a href="none">Privacy Policy</a>
          </li>
          <li>
            <a href="none">FAQ</a>
          </li>
        </ul>
        <ul className="footer-connect-sns">
          {SNS.map((list, index) => {
            return (
              <li key={index}>
                <a href={list.link} target="blank">
                  <img src={list.image} alt={list.title} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
