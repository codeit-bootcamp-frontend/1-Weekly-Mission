import './Button.style.css';

export default function Button({ className = 'button', link = '/', text }) {
  return (
    <a className={className} href={link}>
      <span>{text}</span>
    </a>
  );
}
