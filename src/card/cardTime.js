import kebab from "../image/kebab.svg";

const CardTime = ({ children }) => {
  return (
    <div className="time_wrapper">
      <p className="card_time">{children}</p>
      <img className="toggle_kebab" src={kebab} />
    </div>
  );
};

export default CardTime;
