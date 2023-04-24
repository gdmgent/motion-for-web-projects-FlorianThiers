let sky = document.getElementById('sky');
let mountain = document.getElementById('mountain');
let trees = document.getElementById('trees');
let text = document.getElementById('text');
let textName = document.getElementById('textName');


window.addEventListener('scroll', function() {
  var value = window.scrollY;

  sky.style.top = value * 0.5 + 'px';
  mountain.style.top = -value * 0.005 + 'px';
  trees.style.top = value * 0.1 + 'px';
  text.style.top = value * 0.7 + 'px';
  textName.style.top = value * 0.6 + 'px';

})