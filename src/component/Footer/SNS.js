import {Links } from "./Footer.style.js";

function SNS({ alt, url, icon }) {
  const description = `${alt}페이지로 이동`;
  return (
    <Links to={url}>
      <img src={icon} alt={description} />
    </Links>
  );
}

export default SNS;
