const display = document.getElementId('display');
const btn1 = document.getElementId('btn1');

btn1.onclick = function() {
  display.textContent += '1';
};
