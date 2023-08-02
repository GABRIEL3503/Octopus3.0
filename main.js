window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");

  if (window.pageYOffset > 0) {
    navbar.classList.remove("transparent");
    navbar.classList.add("gradient");
  } else {
    navbar.classList.remove("gradient");
    navbar.classList.add("transparent");
  }
});

// Asegúrate de que el navbar sea transparente al inicio
document.getElementById("navbar").classList.add("transparent");


var typed = new Typed('#element', {
  strings: ['Atractivos.', 'Personsalizados' ,'Veloces.'],
  typeSpeed: 111,
  loop:true,
});





const navbar = document.getElementById('navbar');
const toggleIcon = document.getElementById('toggleIcon');

toggleIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// temas---------------
// Selecciona los elementos HTML
// Selecciona los elementos HTML
var liElements = document.querySelectorAll('ul li:not(:last-child)');

var bodyElement = document.querySelector('body');
var h1Element = document.getElementById('elemento');
var h2Element = document.querySelector('h2');
var cardElement = document.querySelector('.card');

var iconElement = document.getElementById('toggleIcon');
var buttons = document.querySelectorAll('button');
var links = document.querySelectorAll('#navbar ul li a');

// Funciones para cambiar los temas
// function applyLightTheme() {
//   bodyElement.className = 'light-theme-body';
//   h1Element.className = 'light-theme-h1';
//   h2Element.className = 'light-theme-h2';
//   cardElement.className = 'light-theme-card';
// }

// function applyDarkTheme() {
//   bodyElement.className = 'dark-theme-body';
//   h1Element.className = 'dark-theme-h1';
//   h2Element.className = 'dark-theme-h2';
//   cardElement.className = 'dark-theme-card';
// }

// function applyColorfulTheme() {
//   bodyElement.className = 'colorful-theme-body';
//   h1Element.className = 'colorful-theme-h1';
//   h2Element.className = 'colorful-theme-h2';
//   cardElement.className = 'colorful-theme-card';
// }



// Selecciona los elementos HTML
// Selecciona tus elementos del DOM
var bodyElement = document.getElementsByTagName('body')[0];
var h1Element = document.getElementById('elemento');
var h2Element = document.querySelector('h2');
var iconElement = document.getElementById('toggleIcon');
var buttons = document.querySelectorAll('button');
var links = document.querySelectorAll('#navbar ul li a');
var liH2Elements = document.querySelectorAll('li h2'); // selecciona todos los h2 dentro de un li
var h2aElement = document.querySelectorAll('.h2a');
var cardosElements = document.querySelectorAll('.cardo');
var titulosH2Elements = document.querySelectorAll('.titulos h2:first-of-type');
var bn39spanElements = document.querySelectorAll('.bn39span');
var navbarElement = document.querySelector('#navbar.gradient');



// Funciones para cambiar los temas
function applyTheme(themeName) {
  bodyElement.className = themeName + '-theme-body';
  h1Element.className = themeName + '-theme-h1';
  h2Element.className = themeName + '-theme-h2';
  iconElement.className = themeName + '-theme-icon';
  h2aElement.className = themeName + '-theme-h2a';
  liH2Elements.forEach(function(h2) {
    h2.className = themeName + '-theme-lih2';
  });
  cardosElements.forEach(function(element) {
    element.className = 'cardo ' + themeName + '-theme-cardo';
  });
  
  buttons.forEach(function(button) {
    button.className = themeName + '-theme-button';
  });
  
  links.forEach(function(link) {
    link.className = themeName + '-theme-link';
  });

  
  h2aElement.forEach(function(h2a) {
    h2a.className = themeName + '-theme-h2a';
  });

  titulosH2Elements.forEach(function(element) {
    element.className = themeName + '-theme-titulos-h2-after';
  });
  bn39spanElements.forEach(function(element) {
    // Primero, elimina cualquier clase de tema anterior
    element.classList.remove('light-theme-bn39span', 'dark-theme-bn39span', 'colorful-theme-bn39span');
    // Luego, agrega la nueva clase de tema
    element.classList.add(themeName + '-theme-bn39span');
  });
  navbarElement.classList.remove('light-theme-navbar', 'dark-theme-navbar', 'colorful-theme-navbar');
  // Agrega la nueva clase de tema
  navbarElement.classList.add(themeName + '-theme-navbar');
}



function applyLightTheme() {
  applyTheme('light');
}

function applyDarkTheme() {
  applyTheme('dark');
}

function applyColorfulTheme() {
  applyTheme('colorful');
}

// Eventos de click en los botones para cambiar de tema
document.getElementById('light-theme-button').addEventListener('click', applyLightTheme);
document.getElementById('dark-theme-button').addEventListener('click', applyDarkTheme);
document.getElementById('colorful-theme-button').addEventListener('click', applyColorfulTheme);

applyDarkTheme();



