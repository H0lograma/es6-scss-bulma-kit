import {$, $$} from './modules/bling';

const navbarBurgers = document.querySelectorAll('.navbar-burger');
navbarBurgers.forEach(navbarBurger => navbarBurger.on('click',() => {
  navbarBurger.classList.toggle('is-active');
  document.getElementById(navbarBurger.dataset.target).classList.toggle('is-active');
}));
const dropdowns = document.querySelectorAll('.dropdown, .has-dropdown');
dropdowns.forEach(dropdown => dropdown.on('click', () => { dropdown.classList.toggle('is-active'); }));
