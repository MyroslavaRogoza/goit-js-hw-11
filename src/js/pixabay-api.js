export class galleryApi{
  constructor(){}

  getImg(userInput){
    const url = 'https://pixabay.com/api/?';

    const params = new URLSearchParams({
      key: '42280899-738d1c20fb5924f395bcd6368',
      q: `${userInput}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    return fetch(url + params).then(data => {
      if (!data.ok) {
        throw new Error(data.status);
      }
      return data.json();
  });
};}













/*
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  const userInput = evt.target.elements.inputImg.value;
  const url = 'https://pixabay.com/api/?';

  const params = new URLSearchParams({
    key: '42280899-738d1c20fb5924f395bcd6368',
    q: `${userInput}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(url + `${params}`).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }
   // if (data.hits.length === 0) {
     
      // return iziToast.show({
      //   title:
      //     'Sorry, there are no images matching your search query. Please try again!',
      //   theme: 'light',
      //   titleColor: '#fafafb',
      //   backgroundColor: '#ef4040',
      //   position: 'topRight',
      // });
      
    //} 
    console.log(data);
    return data.json;
  }).then(data => console.log(data));


}
*/