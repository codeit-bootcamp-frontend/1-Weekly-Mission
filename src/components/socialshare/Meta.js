import React, { useEffect } from "react";
import metachat from "../../assets/images/metachat.svg";

export default function Meta() {
  const { FB } = window;
  useEffect(() => {
    // cleanup안하면은 에러터짐..
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1059767891829351",
        xfbml: true,
        cookie: true,
        version: "v18.0",
      });
    };
  }, []);
  const shareMeta = () => {
    FB.ui(
      {
        // display: "popup",
        // method: "share",
        // href: "https://developers.facebook.com/docs/",
        method: "feed",
        name: "Facebook Dialogs",
        link: "https://developers.facebook.com/docs/dialogs/",
      },
      function (response) {
        if (response.status === "connected") {
          console.log("logged in!");
        }
      }
    );
  };

  const handleShare = () => {
    window.open(
      "http://www.facebook.com/sharer.php?u=https://niceeey.netlify.app/"
    );
  };

  return <img src={metachat} alt="meta" onClick={handleShare}></img>;
}
