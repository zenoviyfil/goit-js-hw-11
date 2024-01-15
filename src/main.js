import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const API_URL = `https://pixabay.com/api/`;
const API_KEY = `41812412-8184544d67aaee5dc545e6a16`;

const option = {
    image_type: photo,
    orientation: horizontal,
    safesearch: true,
}

function fetchData(searchValue) {
        fetch(`${API_URL}&q=${searchValue}`, option).then(
          response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }
        );
};


searchForm.addEventListener(
  'submit',
  fetchData().then(render).catch(handleError).finally(searchForm.reset())
);

function render(data, index) {
    return
    `<li class="gallery-item">
        <a href="${data.largeImageURL}" target="_blank">
        <img class="gallery-image" data-index="${index}" src="${data.webformatURL}" alt="${data.tags}">
            <ul class="gallery-item-description">
                <li>Likes: ${data.likes}</li>
                <li>Views: ${data.views}</li>
                <li>Downloads: ${data.downloads}</li>
                <li>Comments: ${data.comments}</li>
            </ul>
        </a>
    </li>`;
}

function handleError() {
    alert(
      'Sorry, there are no images matching your search query. Please try again!'
    );
}

