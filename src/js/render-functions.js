import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs } from "../main";


const lightbox = new SimpleLightbox('.js-gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
})


export function createGallery(books) {
    const markup = books.map(({ title, author_name, cover_i, first_publish_year }) => {
        return `<li>
            <a href="https://covers.openlibrary.org/b/id/${cover_i}-L.jpg">
              <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" alt="${title}" />
              <ul>
                <li><h2>${title}</h2></li>
                <li><h3>${author_name}</h3></li>
                <li><p>${first_publish_year}</p></li>
              </ul>
            </a>
          </li>`
    }).join('');

    refs.list.innerHTML = markup;
    lightbox.refresh();
};

export function clearGallery() {
    refs.list.innerHTML = '';
};

export function showLoader(){
    refs.loader.classList.remove('hidden');
};

export function hideLoader() {
    refs.loader.classList.add('hidden');
};