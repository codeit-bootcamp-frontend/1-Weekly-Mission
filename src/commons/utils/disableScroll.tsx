function disableScroll() {
  document.body.style.overflow = "hidden";
  (document.querySelector("html") as HTMLElement).scrollTop = window.scrollY;
}

export default disableScroll;
