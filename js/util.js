function typewritter(str, selector) {
  if (str.length > 0) {
    getNode(selector).innerHTML += str.charAt(0);
    setTimeout(() => typewritter(str.slice(1, str.length), selector), 100);
  }
};

function getNode(selector) {
  return document.querySelector(selector);
};

function emptyNode(selector) {
  const node = getNode(selector);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

function removeNode(selector) {
  const node = getNode(selector);
  node.parentNode.removeChild(node);
};
