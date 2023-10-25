import logoIMG from "assets/Linkbrary.svg";

const Logo = ({ className }) => {
  return (
    <>
      <a href="/">
        <img className={className} src={logoIMG} alt="Linkbrary 로고" />
      </a>
    </>
  );
};

export default Logo;
