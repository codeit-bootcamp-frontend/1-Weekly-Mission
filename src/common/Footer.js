import React from "react";
import "./Footer.css";
import styled from "styled-components";
import { ReactComponent as InstagramIcon } from "../assets/Instagram.svg";
import { ReactComponent as MetaIcon } from "../assets/Meta.svg";
import { ReactComponent as TwitterIcon } from "../assets/Twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/Youtube.svg";

const ResponsiveFooter = styled.div`
  height: 17rem;
  background-color: var(--black);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);

  /* tablet1 */
  @media (min-width: 768px) and (max-width: 1123px) {
  }

  /* tablet2 */
  @media (min-width: 1124px) {
    border: 5px solid red;
  }
  /* descktop*/
  @media (min-width: 1200px) {
    border: 5px solid green;
  }
`;
export default function Footer() {
  return (
    <ResponsiveFooter>
      <span className="codeit">©codeit - 2023</span>
      <div className="policy">
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </div>
      <div className="Icons">
        <MetaIcon />
        <TwitterIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
    </ResponsiveFooter>
  );
}
