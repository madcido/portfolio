function initTemplate() {
  const templateDiv = document.getElementById('home');
  emptyNode(templateDiv);

  const name = document.createElement('p');
  name.className = 'name';
  const title = document.createElement('p');
  title.className = 'title';
  const slogan = document.createElement('p');
  slogan.className = 'slogan';

  templateDiv.appendChild(name);
  templateDiv.appendChild(title);
  templateDiv.appendChild(slogan);

  name.innerHTML = 'Fabio';
  title.innerHTML = "Awesome Motherfucker";
  setTimeout(() => typewritter('The one you\'re looking for', '.slogan'), 2000);
}
