let i = 0;
let introText = 'Hello, world!  I\'m Kevin';
let speed = 75;

function typeWriter () {
  if (i < introText.length) {
    document.getElementById('introText').innerHTML += introText.charAt(i);
    i++;
  }
  setTimeout(typeWriter, speed);
}
