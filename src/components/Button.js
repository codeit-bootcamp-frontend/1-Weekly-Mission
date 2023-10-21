import '../styles/Button.css';

export default function Button({ type, className }) {
  return <button className={`button ${className}`}>{type}</button>;
}
