import "./style.css";

document.getElementsByClassName("btns__button")[0].addEventListener("click", () => {
  window.location.reload();
  window.scrollTo(0, 0); // To refresh at top of Page
});
