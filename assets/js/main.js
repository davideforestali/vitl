
// OFF CANVAS

document.querySelector(".main-header__toggle-btn").addEventListener('click', function() {
  if(this.classList.contains("toggle-btn--active")) {
    this.classList.remove("toggle-btn--active");
    document.querySelector(".main-header").classList.remove("main-header--active");
    document.querySelector(".main-header__nav-wrapper").classList.remove("main-header__nav-wrapper--open");
    document.querySelector("body").style.overflowY = "initial";
  }
  else {
    this.classList.add("toggle-btn--active");
    document.querySelector(".main-header").classList.add("main-header--active");
    document.querySelector(".main-header__nav-wrapper").classList.add("main-header__nav-wrapper--open");
    document.querySelector("body").style.overflowY = "hidden";
  }
});

// MODAL

// const modalLinks = document.querySelectorAll(".modal-link");
const modals = document.querySelectorAll(".modal");

/* modalLinks.forEach(function(link) {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute("href")).style.display = "block";
  });
}); */

modals.forEach(modal => {
  modal.querySelector(".modal__close").addEventListener('click', function() {
    modal.style.display = "none";
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(function(modal) {
    if(e.target == modal) {
      modal.style.display = "none";
    }
  });
});


// STICKY HEADER ON SCROLL

const header = document.querySelector(".main-header");
const stickyAnchor = document.querySelector("#how-it-works");
const sticky = stickyAnchor.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("main-header--sticky");
  } else {
    header.classList.remove("main-header--sticky");
  }
}
window.onscroll = function() {stickyHeader()};