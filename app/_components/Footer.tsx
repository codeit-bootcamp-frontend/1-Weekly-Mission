import { IconFacebook, IconInstagram, IconTwitter, IconYoutube } from "public/svgs";

const Footer = () => {
  return (
    <footer className="flex h-80 w-full justify-between  px-32 pb-64 pt-32">
      <div className="text-16  text-gray-100">@codeit - 2023</div>
      <div className="flex gap-30 text-16">
        <span>Privacy</span>
        <span>FAQ</span>
      </div>
      <div className="flex gap-12">
        <IconFacebook />
        <IconTwitter />
        <IconYoutube />
        <IconInstagram />
      </div>
    </footer>
  );
};

export default Footer;
