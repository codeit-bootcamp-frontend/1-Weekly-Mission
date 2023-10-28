import "../pages/SharedPage/sharedPage.css";

function Tags(props) {
  return (
    <div className={props.className}>
      <a href="#">{props.children}</a>
    </div>
  );
}

function OptionIcons(props) {
  return (
    <div className="option">
      <h5>{props.children}</h5>
      <img src={props.src} alt="option icon" />
    </div>
  );
}
export { Tags, OptionIcons };
