
//navbar
const menu = document.querySelector('#menu')
const navMenu = document.querySelector('nav')

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active')
    navMenu.classList.toggle('hidden')
});

// navbar scroll
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');

    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.add('hidden');
    }
  };
  
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

// Darkmode toggle
const darkToggle = document.querySelector('#darkMode');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

const alertClose = document.querySelector('.alert-close');
const alert = document.querySelector('.alert');

alertClose.addEventListener('click' , function() {
  alert.classList.toggle('hidden')
});