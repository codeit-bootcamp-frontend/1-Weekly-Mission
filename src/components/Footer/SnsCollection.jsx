import { SnsLogo } from "components";
import facebookIMG from "assets/facebook.svg";
import instagramIMG from "assets/instagram.svg";
import twitterIMG from "assets/twitter.svg";
import youtubeIMG from "assets/youtube.svg";

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
