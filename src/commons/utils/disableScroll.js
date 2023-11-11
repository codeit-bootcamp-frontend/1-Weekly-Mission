function disableScroll() {
  document.body.style.overflow = "hidden";
  document.querySelector("html").scrollTop = window.scrollY;
}

export default disableScroll;
