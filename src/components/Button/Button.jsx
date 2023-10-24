import "./Button.css";

const Button = ({ className, link, text }) => {
  const buttonClassName = `cta ${className}`;
  return (
    <a className={buttonClassName} href={link}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
