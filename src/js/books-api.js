import axios from 'axios';

const BASE_URL = "https://openlibrary.org/search.json";

export function getBooksByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            q: query,
        }
            
    }).then(response => response.data).then(data => data.docs);
};

