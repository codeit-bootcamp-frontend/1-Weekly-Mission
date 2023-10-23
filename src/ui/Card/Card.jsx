import "./Card.css";

export const Card = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <div className="Card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
