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

  const form = event.currentTarget;
  const searchValue = form.elements.query.value;

  fetchData(searchValue).then(render).catch(handleError);
}

function render(data) {
  gallery.innerHTML = createMarkup(data.hits);
}

  function handleError(error) {
    alert(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    console.error(error);
  }

  function createMarkup(arr) {
    return arr.map(
      ({
        largeImageURL,
        index,
        webformatURL,
        tags,
        likes,
        views,
        downloads,
        comments,
      }) => `<li class="gallery-item">
        <a href="${largeImageURL}">
        <img class="gallery-image" hits-index="${index}" src="${webformatURL}" alt="${tags}">
            <ul class="gallery-item-description">
                <li>Likes: ${likes}</li>
                <li>Views: ${views}</li>
                <li>Downloads: ${downloads}</li>
                <li>Comments: ${comments}</li>
            </ul>
        </a>
    </li>`
    ).join('');
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: 'alt',
    captionDelay: 250,
  });