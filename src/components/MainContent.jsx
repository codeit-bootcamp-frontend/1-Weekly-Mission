import "../pages/SharedPage/sharedPage.css";
import CardContent from "./CardContent";
import { Tags, OptionIcons } from "./SharedCompos";
import addFolderIcon from "../assets/image/icon-add.svg";
import optionIcon1 from "../assets/image/share.svg";
import optionIcon2 from "../assets/image/pen.svg";
import optionIcon3 from "../assets/image/Group 36.svg";

function MainContent() {
  const styles = {
    width: "16px",
    height: "16px",
  };

  return (
    <section className="content">
      <section className="cards" style={styles}>
        <CardContent src="../assets/image/img-card--noimg.png" />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
      </section>
    </section>
  );
}

export default MainContent;
