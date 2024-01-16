import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const API_URL = 'https://pixabay.com/api/';
const API_KEY = '41812412-8184544d67aaee5dc545e6a16';
const url = `${API_URL}?key=${API_KEY}`;

function fetchData(searchValue) {
  return fetch(`${url}&q=${searchValue}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
}

const searchForm = document.querySelector('.search-form')
const gallery = document.querySelector('.gallery')

searchForm.addEventListener("submit", handleSearch)

function handleSearch(event) {
  event.preventDefault()

  const searchValue = event.currentTarget.elements.query.value;

  fetchData(searchValue).then(render).catch(handleError);
}

function render({
  largeImageURL,
  index,
  webformatURL,
  tags,
  likes,
  views,
  downloads,
  comments,
}) {
  const markup = `<li class="gallery-item">
        <a href="${largeImageURL}" target="_blank">
        <img class="gallery-image" hits-index="${index}" src="${webformatURL}" alt="${tags}">
            <ul class="gallery-item-description">
                <li>Likes: ${likes}</li>
                <li>Views: ${views}</li>
                <li>Downloads: ${downloads}</li>
                <li>Comments: ${comments}</li>
            </ul>
        </a>
    </li>`;
  gallery.insertAdjacentHTML('afterbegin', markup);
}

  function handleError(error) {
    alert(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    console.error(error);
  }