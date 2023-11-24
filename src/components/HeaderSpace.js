import "../styles/navheader.css";
import "../styles/reset.css";
import { useEffect } from "react";

function HeaderSpace({ profiles }) {
  // window.addEventListener("scroll", (e) => {
  //   if (window.scrollY > 300 && window.scrollY < 1100) {
  //     document
  //       .querySelector(".linkAdd-background")
  //       .classList.add("show-bottom");
  //   } else {
  //     document
  //       .querySelector(".linkAdd-background")
  //       .classList.remove("show-bottom");
  //   }
  // });

  return (
    <>
      {profiles !== undefined ? (
        <header>
          <div className="hero-header">
            <div className="company-mark">
              <img
                className="circle-logo"
                src={profiles.profileImageSource}
                alt=""
              />
              <span className="company-name">{profiles.name}</span>
            </div>
            <div className="bookmarks-wrapper">
              <span className="bookmarks">{profiles.title}</span>
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}

export default HeaderSpace;
