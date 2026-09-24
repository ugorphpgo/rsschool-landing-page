const grid= document.querySelector('.catalog__grid');

function createCard (product){
  const card = document.createElement('div')
  card.className = 'card';
  card.dataset.id = product.id;
  card.innerHTML = `
  <div class="card__box">
    <img class="card__image" src=${product.image} alt="Irish coffee">
      </div>
      <div class="preview__description">
        <div class="preview__title">
        <h2 class="preview__h2">${product.name}</h2>
        <p>${product.description}</p>
        <p class="preview__price">${product.price}</p>
        </div>
  </div>
  `;
}