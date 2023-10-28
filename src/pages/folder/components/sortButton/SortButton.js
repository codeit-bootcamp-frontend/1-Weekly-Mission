import React from 'react';
import './sortButton.css';

export default function SortButton({
  children,
  setFolderId,
  folderId,
  setSearchParams,
  isClicked,
  setIsClicked,
  fetchUserLinks,
  setCategoryTitle,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(
      folderId
        ? {
            folderId,
          }
        : {},
    );
  };

  const handleSortButtonClick = () => {
    if (!isClicked) {
      setFolderId(folderId);
      setCategoryTitle(children);
    } else {
      setFolderId(null);
    }
    setIsClicked(!isClicked);
  };

  const handleAllButtonClick = () => {
    setFolderId(null);
    fetchUserLinks(null);
    setCategoryTitle(children);
    setIsClicked(!isClicked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className={isClicked ? 'sort-button clicked' : 'sort-button'}
        onClick={
          children === '전체' ? handleAllButtonClick : handleSortButtonClick
        }
      >
        {children}
      </button>
    </form>
  );
}
