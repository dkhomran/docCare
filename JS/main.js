let btnMenu = document.querySelector("#btn-menu");
let navbar = document.querySelector("#navbar");

btnMenu.onclick = (eo) => {
  btnMenu.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

window.onscroll = (eo) => {
  btnMenu.classList.remove("fa-x");
  navbar.classList.remove("active");
};
