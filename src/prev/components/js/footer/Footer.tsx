import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import styles from "./footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface UrlListItem {
  url: any;
  icon: string;
}

interface UrlList {
  [key: string]: UrlListItem;
}

interface Props {
  name: string;
  onClick: (url: string) => void;
  className?: string;
  key?: string;
}

const urlList: UrlList = {
  facebook: { url: "https://www.facebook.com/", icon: "/images/facebook.svg" },
  twitter: { url: "https://twitter.com/?lang=ko", icon: "/images/twitter.svg" },
  youtube: { url: "https://www.youtube.com/", icon: "/images/youtube.svg" },
  instagram: {
    url: "https://www.instagram.com/",
    icon: "/images/instagram.svg",
  },
};

function Icon({ name, onClick, className }: Props) {
  const { url, icon } = urlList[name];

  const handleClick = () => onClick(url);

  return (
    <Image
      width="20"
      height="20"
      src={icon}
      className={className}
      alt={name}
      onClick={handleClick}
    ></Image>
  );
}

const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

function Footer() {
  const handleIconClick = (url: string) => {
    window.open(url);
  };

  return (
    <div className={cx("footer_wrapper")}>
      <div className={cx("footer_container")}>
        <div className={cx("copyright")}>©codeit - 2023</div>
        <div className={cx("direct_links")}>
          <Link className={cx("links")} href="/">
            Privacy Policy
          </Link>
          <Link className={cx("links")} href="/">
            FAQ
          </Link>
        </div>
        <div className={cx("icon_wrapper")}>
          {["facebook", "twitter", "youtube", "instagram"].map((sns, idx) => {
            return (
              <StyledIcon
                name={sns}
                key={idx.toString()}
                onClick={handleIconClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;

const Wrapper = styled.div`
  margin-top: 100px;
  background-color: #111322;
  min-width: 375px;
`;

const Container = styled.div`
  height: 160px;
  display: grid;
  padding: 32px 104px 64px;
  margin: 0 auto;
  justify-content: space-between;
  font-size: 1.6rem;
  grid-template-areas: "copyright directLink icons";
  gap: 60px;

  @media (max-width: 767px) {
    grid-template-areas:
      "directLink icons"
      "copyright .";
    padding: 32px 32px 64px;
  }
`;

const Copyright = styled.div`
  flex-shrink: 0;
  color: #676767;
  grid-area: copyright;
`;

const DirectLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 30px;
  grid-area: directLink;
`;

const StyledLink = styled(Link)`
  flex-shrink: 0;
  color: #cfcfcf;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 12px;
  grid-area: icons;
`;
