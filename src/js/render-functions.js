import { galleryApi } from './pixabay-api.js';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import iconError from '../img/iconError.svg';

const form = document.querySelector('form');
const input = document.querySelector('.user-input');
const submitBtn = document.querySelector('form button');
const container = document.querySelector('.gallery');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const userData = evt.target.elements.userInput.value;

  const img = new galleryApi();
  img
    .getImg(userData)
    .then(item => {
      if (item.hits.length === 0) {
        return iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          theme: 'dark',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          position: 'topRight',
          iconUrl: iconError,
          iconColor: '#fff',
          maxWidth: '350px',
        });
      }
      return item.hits;
    })
    .then(createGallery);
}

function galleryItemTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
</div>
    <ul class='img-data-container'>
    <li class='img-data-item'>
    <h3>Likes</h3>
    <p>${likes}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views</h3>
    <p>${views}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${comments}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${downloads}</p>
    </li> 

    </ul>
  </li>`;
}

function createGallery(item) {
  const markup = item.map(galleryItemTemplate).join('');
  container.innerHTML = markup;
}

// const img = new galleryApi();
// img
//   .getImg('caiu7ytygtv')
//   .then(item => {
//     if (item.hits.length === 0) {
//       return iziToast.show({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         theme: 'dark',
//         messageColor: '#fafafb',
//         backgroundColor: '#ef4040',
//         position: 'topRight',
//         iconUrl: iconError,
//         iconColor: '#fff',
//         maxWidth: '350px',
//       });
//     }
//     return item.hits;
//   })
//   .then(createGallery);
