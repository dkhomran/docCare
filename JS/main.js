let btnMenu = document.querySelector("#btn-menu");
let navbar = document.querySelector("#navbar");
let loading = document.querySelector(".loading");

btnMenu.onclick = (eo) => {
  btnMenu.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

window.onscroll = (eo) => {
  btnMenu.classList.remove("fa-x");
  navbar.classList.remove("active");
};

window.onload = (eo) => {
  loading.style.display = "none";
};
