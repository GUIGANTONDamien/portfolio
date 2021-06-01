// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-50px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed('.typed', {
  strings: [
    "Bonjour à tous et à toutes, je m'appelle Damien",
    "Après avoir exercé différents métiers, j'ai décidé de me lancer à 100% dans l'apprentissage du code. J'ai commencé avec 5 mois de formation en autodidacte sur les technos Front (html, CSS, JS & React), puis j'ai souhaité consolider le tout via la formation Web Dev' proposée à la Wild Code School de Nantes. Je voulais un nouveau départ, et j'ai découvert une passion, celle de coder.",
  ],
  typeSpeed: 20,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {
  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function () {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

//AOS
AOS.init();

// POST-IT
/*
$(document).ready(function () {
  all_notes = $('li a');

  all_notes.on('keyup', function () {
    note_title = $(this).find('h2').text();
    note_content = $(this).find('p').text();

    item_key = 'list_' + $(this).parent().index();

    data = {
      title: note_title,
      content: note_content,
    };

    
  });

  all_notes.each(function (index) {
    data = JSON.parse(window.localStorage.getItem('list_' + index));

    if (data !== null) {
      note_title = data.title;
      note_content = data.content;

      $(this).find('h2').text(note_title);
      $(this).find('p').text(note_content);
    }
  });
});*/

// curseur

const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`);
  elem.style.setProperty('--y', `${state.y}px`);
  elem.style.setProperty('--width', `${state.width}px`);
  elem.style.setProperty('--height', `${state.height}px`);
  elem.style.setProperty('--radius', state.radius);
  elem.style.setProperty('--scale', state.scale);
};

document.querySelectorAll('.cursor').forEach((cursor) => {
  let onElement;

  const createState = (e) => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%',
    };

    const computedState = {};

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect();
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius;

      computedState.x = left + width / 2;
      computedState.y = top + height / 2;
      computedState.width = width;
      computedState.height = height;
      computedState.radius = radius;
    }

    return {
      ...defaultState,
      ...computedState,
    };
  };

  document.addEventListener('mousemove', (e) => {
    const state = createState(e);
    updateProperties(cursor, state);
  });

  document.querySelectorAll('a, button').forEach((elem) => {
    elem.addEventListener('mouseenter', () => (onElement = elem));
    elem.addEventListener('mouseleave', () => (onElement = undefined));
  });
});

/* Carrousel */

var items = document.querySelectorAll('.carousel .item');
var dots = document.querySelectorAll('.carousel-indicators li');
var currentItem = 0;
var isEnabled = true;
function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}
function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}
function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}
function goToItem(n) {
  if (n < currentItem) {
    hideItem('to-right');
    currentItem = n;
    showItem('from-left');
  } else {
    hideItem('to-left');
    currentItem = n;
    showItem('from-right');
  }
}
function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  dots[currentItem].classList.remove('active');
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}
function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  dots[currentItem].classList.add('active');
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}
document
  .querySelector('.carousel-control.left')
  .addEventListener('click', function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });
document
  .querySelector('.carousel-control.right')
  .addEventListener('click', function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });
document
  .querySelector('.carousel-indicators')
  .addEventListener('click', function (e) {
    var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (target !== currentItem && target < dots.length) {
      goToItem(target);
    }
  });


  /*  Button alert envoyer   */

  
  function clickAlert() {
    alert("La fonctionnalité viendra plus tard");
}

