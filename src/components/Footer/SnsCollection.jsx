import { SnsLogo } from "components";
import facebookIMG from "assets/facebook.svg";
import instagramIMG from "assets/instagram.svg";
import twitterIMG from "assets/twitter.svg";
import youtubeIMG from "assets/youtube.svg";

const SnsCollection = ({ className }) => {
  const snsCollection = [
    ["facebook", facebookIMG, 0],
    ["twitter", twitterIMG, 1],
    ["youtube", youtubeIMG, 2],
    ["instagram", instagramIMG, 3],
  ];

  return (
    <div className={className}>
      {snsCollection.map((item) => {
        return <SnsLogo key={item[2]} brand={item} />;
      })}
    </div>
  );
};

export default SnsCollection;
