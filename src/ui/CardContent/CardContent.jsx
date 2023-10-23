import "./CardContent.css";

export const CardContent = ({ elapsedTime, description, createdAt, isHovered }) => {
  const className = isHovered ? "CardContent CardContent-hovered" : "CardContent";

  return (
    <div className={className}>
      <span className="CardContent-elapsed-time">{elapsedTime}</span>
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
};
