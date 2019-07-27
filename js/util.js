let typingChar = 0;

function typewritter(str, selector) {
  if (typingChar < str.length) {
    document.querySelector(selector).innerHTML += str.charAt(typingChar);
    typingChar++;
    setTimeout(() => typewritter(str, selector), 100);
  } else {
    typingChar = 0;
  }
};

function emptyNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
