import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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

function fetchData(value) {
        fetch(`${url}&q=${value}&orientation=horizontal`)
        .then((response) => {
            if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(value => console.log(value))
    .catch(error => console.log(error))
}