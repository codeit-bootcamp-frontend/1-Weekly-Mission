const formatDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const formattedCreatedAt = `${year}. ${month}. ${dayOfMonth}`;
  return formattedCreatedAt;
};

function getTimeDiff(target, base = new Date()) {
  const targetDate = new Date(target);
  return base - targetDate;
}

const prettyFormatTimeDiff = (diff) => {
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (minutes < 2) {
    return "1 minute ago";
  }

  if (minutes <= 59) {
    return `${minutes} minutes ago`;
  }

  if (minutes <= 60) {
    return "1 hour ago";
  }

  if (hours <= 23) {
    return `${hours} hours ago`;
  }

  if (hours <= 24) {
    return "1 day ago";
  }

  if (days <= 30) {
    return `${days} days ago`;
  }

  if (days <= 31) {
    return `1 month ago`;
  }

  if (months <= 11) {
    return `${months} months ago`;
  }

  if (months <= 12) {
    return `1 year ago`;
  }

  return `${years} years ago`;
};

const shareKakao = (route) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "폴더",
        description: "링크",
        imageUrl: "https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr",
        link: {
          mobileWebUrl: route,
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "title",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

const shareFacebook = (route) => {
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(route)}`;

  window.open(facebookShareURL, "_blank");
};

export { formatDate, getTimeDiff, prettyFormatTimeDiff, shareKakao, shareFacebook };
