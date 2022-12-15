// Make fixed header if we scroll page
window.onscroll = () => {
  const header = document.querySelector('.header__top');
  const Y = window.scrollY;

  if (Y > 200) {
    header.classList.add('header__top--fixed');
  } else if (Y < 10){
    header.classList.remove('header__top--fixed');
  }

}


//Open popup with search-form

import {Autoplay, EffectFade, Swiper} from "swiper";

const searchButton = document.querySelector(".search");

const popupForm = document.querySelector('.popup-form');

const closePopUp = document.querySelector('.close');

searchButton.addEventListener('click', function (e) {
  e.preventDefault();
  popupForm.classList.add('form-active');
});

closePopUp.addEventListener('click', () => {
  popupForm.classList.remove('form-active');
});

new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  speed: 1000,
  effect: 'fade',
  modules: [Autoplay, EffectFade],
  autoplay: {
    delay: 2000,
    waitForTransition: true,
  },
})


// dark-mode

const htmlElement = document.documentElement;
const themeToggle = document.getElementById('dat-checkbox');
const storage = window.localStorage;

themeToggle.addEventListener('change', function () {
  theme();
});

function storageInit() {
  themeToggle.checked = storage.getItem('theme') === 'dark' ? true:false;
}

function theme() {
  if (themeToggle.checked) {
    htmlElement.setAttribute('data-theme', 'dark');
    storage.setItem('theme', 'dark')
  } else {
    htmlElement.removeAttribute('data-theme');
    storage.removeItem('theme');
  }
}

storageInit();
theme();

// Hide/Show comments
const changeArrow = document.querySelector('comments__hide');
const showComments = document.querySelector('comments__row');

// changeArrow.forEach(function (el) {
//   el.addEventListener('click', commentActive)
// });

function commentActive(el) {
  let btn = el.currentTarget;
  let dTarget = btn.dataset.targ
}