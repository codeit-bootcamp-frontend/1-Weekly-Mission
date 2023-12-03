import facebookImg from "@/src/assets/facebook.svg";
import twitterImg from "@/src/assets/twitter.svg";
import youtubeImg from "@/src/assets/youtube.svg";
import instagramImg from "@/src/assets/instagram.svg";

export interface Data {
  name ?: string;
  url: string;
  icon: string;
}

const socialMedia: Data[] = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: facebookImg,
  },
  {
    name: "twitter",
    url: "https://twitter.com/",
    icon: twitterImg,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    icon: youtubeImg,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: instagramImg,
  },
];

export default socialMedia;
