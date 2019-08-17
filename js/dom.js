function initSidebar() {
  document.querySelectorAll('.sidebar a').forEach((link, i) => {
    setTimeout(() => {
      link.classList.add('social-link-in');
      link.setAttribute('data-in', true);
    }, i * 200);
  });
};

function displayProjects() {
  projects.forEach((project, i) => {
    const projectDiv = renderProject(project);
    getNode('.projects-display').appendChild(projectDiv);
  });
};

function renderProject(project) {
  const projectTile = document.createElement('div');
  projectTile.className = 'project col center from-right';
  projectTile.setAttribute('data-animate', 'slide-in');
  projectTile.innerHTML = `
    <img src="${project.ss}" alt="project screenshot">
    <div>
      <p class="project-name">${project.name}</p>
      <p class="project-type">${project.type}</p>
      <div class="row justify-center">
        <a href="${project.repo}">Github Repo <span>▶</span></a>
        <a href="${project.link}">Live preview <span>▶</span></a>
      </div>
    </div>
  `;

  return projectTile;
};
