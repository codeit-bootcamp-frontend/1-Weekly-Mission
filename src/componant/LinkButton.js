import '../styles/componant.css';

function LinkButton({ className, href, title, children }) {
  const buttonClass = `btn ${className}`;

  return (
    <a className={buttonClass} href={href} title={title}>
      {children}
    </a>
  );
}

export default LinkButton;
