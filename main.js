AOS.init();
document.addEventListener("DOMContentLoaded", function() {
  showWelcomeAlert();
});


window.addEventListener('load', function() {
  // Obtenemos las referencias a cada span por su ID
  const infoTrigger1 = document.getElementById('info-trigger1');
  const infoTrigger2 = document.getElementById('info-trigger2');
  const infoTrigger3 = document.getElementById('info-trigger3');
  const infoTrigger4 = document.getElementById('info-trigger4');

  // Función para mostrar el SweetAlert
  function showInfoAlert(message) {
      Swal.fire({
          title: 'Información',
          text: message,
          icon: 'info',
          confirmButtonText: 'Ok'
      });
  }

  // Función genérica para añadir el escuchador de eventos
  function addClickListener(element, message) {
    element.addEventListener('click', function(e) {
      e.preventDefault(); // Previniendo cualquier comportamiento predeterminado, si es necesario
      console.log('Clicked!');  // Esto debería aparecer en la consola cuando hagas clic en el span
      showInfoAlert(message); // Llama a la función que muestra el SweetAlert
    });
  }

  // Añadimos el escuchador de eventos a cada elemento con su respectivo mensaje
  addClickListener(infoTrigger1, 'Información sobre Huincul Turismo');
  addClickListener(infoTrigger2, 'Información sobre ServiPlanet');
  addClickListener(infoTrigger3, 'Información sobre Sistema de Vouchers Aniceta');
  addClickListener(infoTrigger4, 'Información sobre carta online');
});



document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form form');
  
  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita el envío inmediato del formulario

      // Envía el formulario en segundo plano usando Fetch API
      fetch(form.action, {
          method: 'POST',
          body: new FormData(form)
      });

      // Muestra el SweetAlert inmediatamente después de enviar la solicitud
      Swal.fire({
          title: '¡Enviando!',
          text: 'Tu correo está siendo enviado.',
          icon: 'info',
          confirmButtonText: 'Ok'
      });
  });
});


function updateNavbar() {
  var navbar = document.getElementById("navbar");

  // Para dispositivos más grandes que minWidth, cambia el fondo según el scroll
  if (window.innerWidth > minWidth) {
    if (window.pageYOffset > 0) {
      navbar.classList.remove("transparent");
      navbar.classList.add("gradient");
    } else {
      navbar.classList.remove("gradient");
      navbar.classList.add("transparent");
    }
  }
  // Para dispositivos más pequeños
  else {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("transparent");
      navbar.classList.add("gradient");
    } else {
      navbar.classList.remove("gradient");
      navbar.classList.add("transparent");
    }
  }
}


// Agregar siempre el evento de escucha para el scroll
window.addEventListener("scroll", updateNavbar);

// Asegurarse de que el navbar sea transparente al inicio
document.getElementById("navbar").classList.add("transparent");

const closeButton = document.querySelector('.navbaruno .close');

closeButton.addEventListener('click', () => {
    navbar.classList.remove('active');
});

var minWidth = 768;


  var typed = new Typed('#element', {
    strings: ['Atractivas.', 'Personalizadas', 'Innovadoras.', 'Veloces.'],
    typeSpeed: 111,
    loop: true,
  });






const navbar = document.getElementById('navbar');
const toggleIcon = document.getElementById('toggleIcon');

toggleIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// Selecciona los elementos HTML

var liElements = document.querySelectorAll('ul li:not(:last-child)');
var copyrightElements = document.querySelectorAll('.copyright');
var bodyElement = document.querySelector('body');
var h1Element = document.getElementById('elemento');
var h2Element = document.querySelector('h2');
var cardElements = document.querySelectorAll('.card');
var copyrightElements = document.querySelectorAll('.copyright');
var iconElement = document.getElementById('toggleIcon');
var buttons = document.querySelectorAll('button');
var links = document.querySelectorAll('#navbar ul li a');
var footerH2Elements = document.querySelectorAll('footer h2');
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

var titulo2Element = document.getElementById('titulo2');
var footerButtonElements = document.querySelectorAll('footer button');
var labelElements = document.querySelectorAll('label');
var customCardContentElements = document.querySelectorAll('.customCard-content');

// Selección del elemento
var closeElements = document.querySelectorAll('.close');


// Funciones para cambiar los temas
function applyTheme(themeName) {
  copyrightElements.forEach(function(copyrightEl) {
    copyrightEl.className = 'copyright ' + themeName + '-theme-copyright';
});
  closeElements.forEach(function(closeEl) {
    closeEl.className = 'close ' + themeName + '-theme-close';
});
  labelElements.forEach(function(label) {
    label.className = themeName + '-theme-label';
});
  footerButtonElements.forEach(function(button) {
    button.className = themeName + '-theme-footer-button';
});
  footerH2Elements.forEach(function(h2) {
    h2.className = themeName + '-theme-footer-h2';
});
  if (titulo2Element) {
    titulo2Element.className = themeName + '-theme-titulo2';
  }
  cardElements.forEach(function(cardElement) {
    cardElement.className = 'card'; // Mantener la clase 'card' y limpiar otras clases
    cardElement.classList.add(themeName + '-theme-card');
  });
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
  // navbarElement.classList.remove('light-theme-navbar', 'dark-theme-navbar', 'colorful-theme-navbar');
  // // Agrega la nueva clase de tema
  // navbarElement.classList.add(themeName + '-theme-navbar');
  if (titulo2Element) {
    titulo2Element.classList.remove('light-theme-titulo2', 'dark-theme-titulo2', 'colorful-theme-titulo2');
    titulo2Element.classList.add(themeName + '-theme-titulo2');
  }

  customCardContentElements.forEach(function(customCardElement) {
    // Selecciona el h2 y el p dentro del .customCard-content
    var h2InsideCustomCard = customCardElement.querySelector('h2');
    var pInsideCustomCard = customCardElement.querySelector('p');
    // Aplica el tema al h2
    if (h2InsideCustomCard) {
      h2InsideCustomCard.className = themeName + '-theme-customCard-h2';
    }

    // Aplica el tema al p
    if (pInsideCustomCard) {
      pInsideCustomCard.className = themeName + '-theme-customCard-p';
    }
  });
}




function applyLightTheme() {
  applyTheme('light');
}

function applyDarkTheme() {
  applyTheme('dark');
}


document.addEventListener('DOMContentLoaded', function() {
  applyDarkTheme();
});


// // Eventos de click en los botones para cambiar de tema
// document.getElementById('light-theme-button').addEventListener('click', applyLightTheme);
// document.getElementById('dark-theme-button').addEventListener('click', applyDarkTheme);
// // document.getElementById('colorful-theme-button').addEventListener('click', applyColorfulTheme);

// applyDarkTheme();


// Obtén la referencia al switch
const themeSwitch = document.getElementById('theme-switch');

// Función para manejar el cambio de tema basado en la posición del switch
function handleThemeChange() {
    if (themeSwitch.checked) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
}

// Escuchador de eventos para el switch
themeSwitch.addEventListener('change', handleThemeChange);

// Aplica el tema oscuro inicialmente si es necesario
if (themeSwitch.checked) {
    applyDarkTheme();
} else {
    applyLightTheme();
}



    AOS.init({
      easing: 'ease-in-out-back',
        startEvent: 'DOMContentLoaded', // Nombre del evento que inicializará la animación
        offset: 120,   // Cambia el valor para controlar a qué distancia del "viewport" se activará la animación
        delay: 0,      // Retraso en milisegundos para la animación
        duration: 1000 // Duración de la animación en milisegundos
    });



    document.addEventListener('DOMContentLoaded', function() {
      // Configuración de los detalles de la alerta para cada botón
      const alertDetails = {
        'alertButton1': {
          isCarousel: true,
          title: 'Diseño de Páginas Web',
          content: 'Alguno de nuestros trabajos destacados',
          imageUrl: 'img/huincul.lap.png',
          description: 'Pagina web Viajes Turisticos Huincul turismo',
          link: 'https://huinculturismo.tur.ar/'
        },
        'alertButton2': {
          title: 'Menú On Line',
          content: 'Carta para Restoranes, Bares, Casas de comidas, Autodministrables.',
          imageUrl: 'img/menu.png',
          description: 'Aprende más sobre nuestros servicios de diseño web.',
          link: 'https://tu-enlace-de-paginas-web.com'
        },
        'alertButton3': {
          title: 'Menú On Line',
          content: 'Carta para Restoranes, Bares, Casas de comidas, Autodministrables.',
          imageUrl: 'img/menu.png',
          description: 'Aprende más sobre nuestros servicios de diseño web.',
          link: 'https://tu-enlace-de-paginas-web.com'
        },
        'alertButton4': {
          title: 'Menú On Line',
          content: 'Carta para Restoranes, Bares, Casas de comidas, Autodministrables.',
          imageUrl: 'img/menu.png',
          description: 'Aprende más sobre nuestros servicios de diseño web.',
          link: 'https://tu-enlace-de-paginas-web.com'
        },
        'alertButton5': {
          title: 'Menú On Line',
          content: 'Carta para Restoranes, Bares, Casas de comidas, Autodministrables.',
          imageUrl: 'img/menu.png',
          description: 'Aprende más sobre nuestros servicios de diseño web.',
          link: 'https://tu-enlace-de-paginas-web.com'
        },
        'alertButton6': {
          title: 'Menú On Line',
          content: 'Carta para Restoranes, Bares, Casas de comidas, Autodministrables.',
          imageUrl: 'img/menu.png',
          description: 'Aprende más sobre nuestros servicios de diseño web.',
          link: 'https://tu-enlace-de-paginas-web.com'
        },
        // ... Continuar para los demás botones ...
      };
    
      function showSweetAlert(buttonId) {
        const details = alertDetails[buttonId];
      
        if (details.isCarousel) {
          // Mostrar Sweet Alert con Swiper
          Swal.fire({
            title: 'Destacadas',
            html: `
            <div class="swiper mySwiper">
            <div class="swiper-wrapper">
             
              <div class="carr swiper-slide">
                <img src="./img/huincul.lap.png" alt="Imagen 2">
                <a class="link" href="https://huinculturismo.tur.ar/" target="_blank">Huincul Turismo</a>
              </div>
              <div class="carr swiper-slide">
              <img src="./img/servipl-mock.png" alt="Imagen 1">
              <a class="link" href="https://www.serviplanet.com.ar/" target="_blank">Serviplanet</a>
            </div>
              <!-- Más slides aquí -->
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
            `,
            showCloseButton: true,
            width: 600,
            showConfirmButton: false, // No muestra el botón "OK"

            footer: `<button onclick="location.href='URL_CONSULTA_PLANES';">Consultar planes</button>`,
            didOpen: () => {
              new Swiper('.mySwiper', {
                spaceBetween: 30,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                loop: true // Si quieres que el carrusel gire en bucle
              });
            }
          });
        } else {
          // Mostrar Sweet Alert estándar
          Swal.fire({
            title: details.title,
            text: details.content,
            // Otras opciones
          });
        }
      }
      
    
      // Agregar un evento 'click' a cada botón por su ID
      Object.keys(alertDetails).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
          button.addEventListener('click', function() {
            showSweetAlert(buttonId);
          });
        }
      });
    });
    