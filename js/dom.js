function initSidebar() {
  document.querySelectorAll('.sidebar a').forEach((link, i) => {
    setTimeout(() => {
      link.classList.add('social-link-in');
      link.setAttribute('data-in', true);
    }, i * 200);
  });
};

function displayProjects(node) {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('underline');
  });
  node.disabled = true;
  node.classList.add('underline');
  emptyNode('.projects-display');
  const filteredProjects = filterProjects(node.getAttribute('data-filter'));
  filteredProjects.forEach((project, i) => {
    const projectDiv = renderProject(project);
    document.querySelector('.projects-display').appendChild(projectDiv);
    setTimeout(() => projectDiv.classList.add('slide-in'), i * 200 + 50);
  });
};

function filterProjects(filter) {
  return (filter === 'highlights') ? [projects[0], projects[1]] : projects.filter(project => project.type === filter);
};

function renderProject(project) {
  const projectTile = document.createElement('div');
  projectTile.className = 'project col center from-right';
  projectTile.innerHTML = `
    <img src="${project.ss}" alt="project screenshot">
    <div>
      <a href="${project.repo}">Github Repo <span>></span></a>
      <a href="${project.link}">Live preview <span>></span></a>
    </div>
    <p>${project.name}</p>
  `;

  return projectTile;
};
