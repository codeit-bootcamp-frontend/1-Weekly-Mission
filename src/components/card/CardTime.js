import kebab from "../../image/kebab.svg";

const CardTime = ({ set_time }) => {
  return (
    <div className="time_wrapper">
      <p className="card_time">{set_time}</p>
      <img className="toggle_kebab" src={kebab} alt="kebab button" />
    </div>
  );
};

export default CardTime;
