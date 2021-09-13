const BASE_URL = 'https://pixabay.com/api/';
let page = 1;
const key = '21948023-054fe05cd08d0a129e2d1c0a6';

export async function fetchImages(request) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${request}&page=${page}&per_page=12&key=${key}`
  )
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      page++;
      return data;
    });
}
