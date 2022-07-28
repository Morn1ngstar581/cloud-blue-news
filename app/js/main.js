//Open popup with search-form
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