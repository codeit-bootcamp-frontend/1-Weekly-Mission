import React from "react";

interface BookMarkType {
  bookmarkNumber: any;
  account: any;
  errorMessage: string;
}

const BookMark = ({ bookmarkNumber, account, errorMessage }: BookMarkType) => {
  const { name, image_source: profileImageSource } = account;
  if (!bookmarkNumber) return;
  return (
    <div className="section-title section-title-first">
      <div className="section-title-inner">
        <div className="icon-wrap">
          <img src={profileImageSource} alt="코드잇아이콘" />
        </div>
        {!errorMessage ? <h4>@{name}</h4> : <h4>{errorMessage}</h4>}
        {bookmarkNumber ? (
          <h3>{bookmarkNumber.name}</h3>
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default BookMark;
