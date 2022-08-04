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
  modules:[Autoplay, EffectFade],
  autoplay:{
    delay: 5000,
    waitForTransition: true,
  },
})