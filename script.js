const display = document.getElementId('display');
const btn1 = document.getElementId('button1');

btn1.onclick = function() {
  display.textContent += '1';
};
