const loader = document.querySelector('.loader');
export class galleryApi {
  constructor() {
    this.url = 'https://pixabay.com/api/?';
  }
  getDataImg(userInput) {
    const params = new URLSearchParams({
      key: '42280899-738d1c20fb5924f395bcd6368',
      q: `${userInput}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    return fetch(this.url + params).then(data => {
      if (!data.ok) {
        loader.classList.add('loader-hide');
        throw new Error(data.status);
      }
      loader.classList.add('loader-hide');
      return data.json();
    });
  }
}
