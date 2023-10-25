import { LoginButton, Logo } from "components";

const Navigator = ({ className, isLogin, data }) => {
  const [nav, gnb, logo, cta, ctaShort] = className;
  return (
    <nav className={nav}>
      <div className={gnb}>
        <Logo className={logo} />
        <LoginButton
          className={[cta, ctaShort]}
          isLogin={isLogin}
          data={data}
        />
      </div>
    </nav>
  );
};

export default Navigator;
