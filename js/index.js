setTimeout(() => typewritter('awesome developer', '.google-jk .main .input .search'), 2500);
setTimeout(() => initTemplate(), 6000);

window.addEventListener('scroll', () => animateStuff());

function animateStuff() {
  if (document.querySelector('.name').offsetTop < window.pageYOffset) {
    document.querySelector('.logo').classList.add('logo-slide');
  } else {
    document.querySelector('.logo').classList.remove('logo-slide');
  }
};
