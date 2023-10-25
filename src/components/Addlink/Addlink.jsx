import Button from "../Button/Button";
import IMAGES from "../../assets/images";

const Addlink = () => {
  return (
    <div className="addlink-box">
      <div className="addlink-input">
        <div className="addlink-inner-input">
          <img className="addlink-image" src={IMAGES.link} />
          <div className="addlink-content"></div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Addlink;
