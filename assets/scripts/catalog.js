const grid = document.querySelector('.catalog__grid');
const tabs = document.querySelector('.catalog__tabs');
const moreButton = document.querySelector('.refresh__button');
let currentProduct;

function createCard(product) {
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

function getProduct(el) {
  const card = el.closest('.preview__card');
  if (!card) {
    return undefined;
  }
  return products.find((product) => product.id === card.dataset.id);
}

function updateMoreButton() {
  if (!grid.classList.contains('expanded') && grid.childElementCount > 4) {
    moreButton.classList.remove('hidden__button');
  } else {
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
  tabs
    .querySelectorAll('.catalog__tab')
    .forEach((t) => t.setAttribute('aria-pressed', String(t === tab)));
  renderCatalog(tab.dataset.category);
});

moreButton.addEventListener('click', () => {
  grid.classList.add('expanded');
  updateMoreButton();
});

renderCatalog('coffee');

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

function setModalOpen(open) {
  body.classList.toggle('modal__open', open);
}

function renderModal(product) {
  currentProduct = product;
  const modalContent = document.querySelector('.modal__content');
  modalContent.dataset.id = product.id;
  modalContent.dataset.category = product.category;
  modalContent.innerHTML = `
  <div class="card__box">
    <img class="modal__image" src="${product.image}" alt="${product.name}">
      </div>
      <div class="preview__description">
        <div class="preview__title">
        <h2 class="preview__h2">${product.name}</h2>
        <p>${product.description}</p>
        <div class="modal__tabs">
          <button class="modal__tab-item" type="button" data-size="s" aria-pressed="true">S ${product.sizes.s.size}</button>
          <button class="modal__tab-item" type="button" data-size="m" aria-pressed="false">M ${product.sizes.m.size}</button>
          <button class="modal__tab-item" type="button" data-size="l" aria-pressed="false">L ${product.sizes.l.size}</button>
</div>
<div class="modal__tabs">
  <button class="modal__tab-item" type="button" data-additive="0" aria-pressed="false">${product.additives[0].name}</button>
  <button class="modal__tab-item" type="button" data-additive="1" aria-pressed="false">${product.additives[1].name}</button>
  <button class="modal__tab-item" type="button" data-additive="2" aria-pressed="false">${product.additives[2].name}</button>
 </div>
<p class="modal__price">$${product.price}</p>
        </div>
  </div>
  `;
}

grid.addEventListener('click', (event) => {
  const product = getProduct(event.target);
  if (!product) return;
  renderModal(product);
  setModalOpen(true);
});

modal.addEventListener('click', (event) => {
  if (event.target!==modal || event.target.closest('.modal__close')) {
    setModalOpen(false);
  }
  const size = event.target.closest('[data-size]');
  modal
    .querySelectorAll('[data-size]')
    .forEach((s) => s.setAttribute('aria-pressed', String(s === size)));
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setModalOpen(false);
});