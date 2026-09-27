const grid= document.querySelector('.catalog__grid');
const tabs = document.querySelector('.catalog__tabs');
const moreButton = document.querySelector('.refresh__button');

function createCard (product){
  const card = document.createElement('div');
  card.className = 'preview__card';
  card.dataset.id = product.id;
  card.dataset.category = product.category;
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

function getProduct (el) {
  const card = el.closest('.preview__card');
  if (!card) {
    return undefined;
  }
  return products.find(product => product.id === card.dataset.id);
}

function updateMoreButton () {
  if(!grid.classList.contains('expanded')&& grid.childElementCount > 4) {
    moreButton.classList.remove('hidden__button');
  }else{
    moreButton.classList.add('hidden__button');
  }
}

function renderCatalog(category) {
  grid.replaceChildren();
  products
    .filter((product) => product.category === category)
    .forEach((product) => grid.append(createCard(product)));
  grid.classList.remove('expanded');
  updateMoreButton();
}

tabs.addEventListener('click', (event) => {
  const tab = event.target.closest('.catalog__tab');
  if (!tab) {
     return;
  }
  tabs.querySelectorAll('.catalog__tab').forEach((t)=>t.setAttribute('aria-pressed', String(t===tab)));
  renderCatalog(tab.dataset.category);
});

moreButton.addEventListener('click', () => {
  grid.classList.add('expanded');
  updateMoreButton();
});

renderCatalog('coffee');


