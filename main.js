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