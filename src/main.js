import { getBooksByQuery } from "./js/books-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";



export const refs = {
    form: document.querySelector('.js-form'),
    list: document.querySelector('.js-gallery'),
    loader: document.querySelector('.js-loader'),
};


refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(refs.form);
    const query = formData.get('search-text');

    showLoader();
    clearGallery();
    getBooksByQuery(query).then(books => {
        if (books.length === 0) {
            return iziToast.error({
                message: 'За вашим запитом нічого не знайдено',
                position: "topRight",
            })
        }
        createGallery(books);
    }).catch(err => console.error(err)).finally(() => hideLoader());

    refs.form.reset();
})