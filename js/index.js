setTimeout(() => typewritter('awesome developer', '.search'), 2500);
setTimeout(() => {
  removeNode('.google-jk');
  typewritter('Fabio Carmo', '.name');
}, 5800);
setTimeout(() => {
  initSidebar();
  typewritter('The one you\'re looking for', '.slogan');
}, 7400);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const viewHeight = window.innerHeight;

  if (scrollTop > viewHeight * 3/4) {
    initSidebar();
  }

  if (scrollTop + viewHeight >= document.body.scrollHeight) {
    getNode('.footer').classList.add('slide-in');
  } else {
    getNode('.footer').classList.remove('slide-in');
  }

  const navbarTop = getNode('.navbar').getBoundingClientRect().top;
  const nameTop = getNode('.name').getBoundingClientRect().top;
  if (navbarTop - nameTop < 20) {
    getNode('.logo').classList.add('slide-in');
    getNode('.logo a').style.pointerEvents = 'auto';
  } else {
    getNode('.logo').classList.remove('slide-in');
    getNode('.logo a').style.pointerEvents = 'none';
  }

  document.querySelectorAll('[data-animate]').forEach(node => {
    if (node.getBoundingClientRect().top < viewHeight * 0.9) {
      node.classList.add(node.getAttribute('data-animate'));
    }
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    const linkTop = link.getBoundingClientRect().top;
    if (link.getAttribute('data-in')) {
      if (navbarTop - linkTop > -50 && navbarTop - linkTop < 50) {
        link.classList.remove('social-link-in');
        link.classList.add('social-link-out');
      } else {
        link.classList.remove('social-link-out');
        link.classList.add('social-link-in');
      }
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const sectionTop = getNode(link.getAttribute('href')).getBoundingClientRect().top;
    const sectionBottom = getNode(link.getAttribute('href')).getBoundingClientRect().bottom;
    if (sectionTop < viewHeight * 0.4 && sectionBottom > viewHeight * 0.6) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('nav-burger')) {
    getNode('.nav-burger').classList.toggle('open');
    getNode('.nav-menu').classList.toggle('show');
  } else {
    getNode('.nav-burger').classList.remove('open');
    getNode('.nav-menu').classList.remove('show');
  }
});

document.querySelectorAll('.fx span').forEach(node => {
  node.addEventListener('mouseover', () => {
    node.classList.add('boing');
    setTimeout(() => node.classList.remove('boing'), 500);
  });
});

displayProjects();

function isTabbing(evnt) {
  if (evnt.keyCode === 9) {
    document.body.classList.add('is-tabbing');
    
    window.removeEventListener('keydown', isTabbing);
    window.addEventListener('mousedown', isMousing);
  }
}

function isMousing() {
  document.body.classList.remove('is-tabbing');
  
  window.removeEventListener('mousedown', isMousing);
  window.addEventListener('keydown', isTabbing);
}

window.addEventListener('keydown', isTabbing);
