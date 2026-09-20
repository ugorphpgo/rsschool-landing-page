const root = document.documentElement;
const button = document.querySelector('.theme__switch');


function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (theme === 'dark'){
    button.setAttribute('aria-pressed', true);
  }else if(theme === 'light'){
    button.setAttribute('aria-pressed', false);
  }
}

applyTheme(root.dataset.theme);

 button.addEventListener('click', () => {
   const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', root.getAttribute('data-theme'));
});
