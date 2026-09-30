const desktop = window.matchMedia('(width>= 769px)');
const burger = document.querySelector('.burger__menu');
const body = document.body;
const headerNav = document.querySelector('.header__nav');

function setBurgerOpen(open) {
    body.classList.toggle('burger__open',open);
    burger.setAttribute('aria-expanded', String(open));
}

burger.addEventListener('click', () => {
  const shouldOpen = !body.classList.contains('burger__open');
  setBurgerOpen(shouldOpen);
});

headerNav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) {
      return;
    }
    setBurgerOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setBurgerOpen(false);
});

desktop.addEventListener('change', (event) => {
  if (event.matches) {
    setBurgerOpen(false);
  }
});