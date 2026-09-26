const grid= document.querySelector('.catalog__grid');

function createCard (product){
  const card = document.createElement('div');
  card.className = 'preview__card';
  card.dataset.id = product.id;
  card.innerHTML = `
  <div class="card__box">
    <img class="card__image" src="${product.image}" alt="${product.name}">
      </div>
      <div class="preview__description">
        <div class="preview__title">
        <h2 class="preview__h2">${product.name}</h2>
        <p>${product.description}</p>
        <p class="preview__price">$${product.price}</p>
        </div>
  </div>
  `;
  return card;
}

function renderCatalog (category){
  grid.replaceChildren();
  products
    .filter(product => product.category === category)
    .forEach(product =>grid.append(createCard(product)));
}

function getProduct (el) {
  const card = el.closest('.preview__card');
  if (!card) {
    return undefined;
  }
  return products.find(product => product.id === card.dataset.id);
}

renderCatalog('coffee');