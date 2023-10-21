import facebookIMG from "../assets/images/svg/facebook.svg";
import instagramIMG from "../assets/images/svg/instagram.svg";
import twitterIMG from "../assets/images/svg/twitter.svg";
import youtubeIMG from "../assets/images/svg/youtube.svg";
import SnsLogo from "./SnsLogo";

const SnsCollection = ({ className }) => {
  const snsCollection = [
    ["facebook", facebookIMG],
    ["twitter", twitterIMG],
    ["youtube", youtubeIMG],
    ["instagram", instagramIMG],
  ];

  return (
    <div className={className}>
      {snsCollection.map((item) => {
        return <SnsLogo brand={item} />;
      })}
    </div>
  );
};

export default SnsCollection;
