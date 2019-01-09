import {$, $$} from './modules/bling';
import Wallop from 'wallop';

const nav = $('nav');
const navBar = $('.uk-navbar-nav');
const navToggle = $('.uk-navbar-toggle');
const navDropdown = $('.uk-navbar-dropdown');
const titleList = $$('.mission-title-list-item');
const garmFormItems = $$('.form-input');
const carouselItem = $('#carousel');
const carouselControl = $('.carousel-control');
const carouselNavList = $$('.carousel-list ul li');
const tiles = $('#tiles');

const isInViewY = function (element, visibilityPercent = 0) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top <= (rect.height * (visibilityPercent / 100)) &&
      rect.bottom >= (rect.height * (visibilityPercent / 100))
  );
};

const handleView = function () {
  const viewPort = document.documentElement.getBoundingClientRect();
  if (isInViewY(nav) && viewPort.top === 0) {
    nav.classList.remove('sticky-navbar');
    navBar.classList.remove('close');
    navBar.classList.add('open');
  } else {
    nav.classList.add('sticky-navbar');
    navBar.classList.add('close');
    navBar.classList.remove('open');
    nav.classList.remove('open');
  }

  console.log(isInViewY(tiles, 60));
};

window.on(
    'scroll',
    handleView
);

handleView();

navToggle.on(
    'click',
    function (event) {
      event.preventDefault();

      if (!navBar.classList.contains('open')) {
        nav.classList.add('open');
        navBar.classList.add('open');
        navBar.classList.remove('close');
      } else {
        navBar.classList.remove('open');
        navBar.classList.add('closing');

        setTimeout(
            () => {
              navBar.classList.remove('closing');
              navBar.classList.add('close');
              nav.classList.remove('open');
            },
            400
        )
      }
    }
);

navDropdown.parentNode.childNodes.on(
    'mouseover',
    function (event) {
      event.preventDefault();
      navDropdown.classList.add('uk-open');
    }
);

navDropdown.parentNode.childNodes.on(
    'mouseout',
    function (event) {
      event.preventDefault();

      navDropdown.classList.remove('uk-open');
    }
);


let current = 0;

setInterval(
    () => {
      titleList[current].classList.remove('mission-title-list-item--show');
      current = (current + 1) % titleList.length;
      titleList[current].classList.add('mission-title-list-item--show');
    },
    2500
);

for (let formItem of garmFormItems) {
  formItem.children[0].on('input', function () {
    if (!this.value) {
      formItem.children[1].classList.remove('label--active');
      return;
    }

    formItem.children[1].classList.add('label--active');
  });

  if (formItem.children[0].value) {
    formItem.children[1].classList.add('label--active');
  }
}


const carousel = new Wallop(carouselItem);

carousel.on(
    'change',
    function ({detail}) {
      carouselNavList.forEach(item => item.classList.remove('active'));
      carouselNavList[detail.currentItemIndex].classList.add('active');
    }
);


carouselNavList.forEach(
    (navItem, index) => navItem.on('click', event => { event.preventDefault(); carousel.goTo(index); })
);
carouselControl.children[0].on('click', () => carousel.previous());
carouselControl.children[1].on('click', () => carousel.next());
