import facebookIcon from "../../assets/img/modal-facebook.svg";
function MetaShare() {
  const handleShareClick = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      "페이스북 공유하기",
      "width=600,height=800,location=no,status=no,scrollbars=yes"
    );
  };
  return (
    <button onClick={handleShareClick}>
      <img src={facebookIcon} />
      <p>페이스북</p>
    </button>
  );
}
export default MetaShare;
