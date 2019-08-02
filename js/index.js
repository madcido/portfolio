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
  const scrollTop = window.pageYOffset;
  const viewHeight = window.innerHeight;
  if (scrollTop > viewHeight * 3/4) {
    initSidebar();
  }

  const navbarTop = getNode('.navbar').getBoundingClientRect().top;
  const nameTop = getNode('.name').getBoundingClientRect().top;
  if (navbarTop - nameTop < 20) {
    getNode('.logo').classList.add('slide-in');
  } else {
    getNode('.logo').classList.remove('slide-in');
  }

  document.querySelectorAll('[data-animate]').forEach(node => {
    if (node.getBoundingClientRect().top + 150 < viewHeight) {
      node.classList.add(node.getAttribute('data-animate'));
    }
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    const linkTop = link.getBoundingClientRect().top;
    if (link.getAttribute('data-in')) {
      if (navbarTop - linkTop > -50 && navbarTop - linkTop < 60) {
        link.classList.remove('social-link-in');
        link.classList.add('social-link-out');
      } else {
        link.classList.remove('social-link-out');
        link.classList.add('social-link-in');
      }
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    const sectionTop = getNode(link.getAttribute('href')).getBoundingClientRect().top;
    if (sectionTop > viewHeight * (-1/2) && sectionTop < viewHeight * 1/4) {
      link.classList.add('selected');
    } else {
      link.classList.remove('selected');
    }
  });
});

document.querySelectorAll('.description span').forEach(node => {
  node.addEventListener('mouseover', () => {
    node.classList.add('boing');
    setTimeout(() => node.classList.remove('boing'), 500);
  });
});

document.querySelectorAll('[data-filter]').forEach(node => {
  node.addEventListener('click', event => displayProjects(event.target));
});

displayProjects(document.querySelectorAll('[data-filter]')[0]);
