import '@/styles/cta.module.css';

function Cta({ name }: { name: string }): JSX.Element {
  return <button className="cta-btn">{name}</button>;
}

export default Cta;
