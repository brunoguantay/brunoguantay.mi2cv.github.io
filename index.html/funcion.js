function mensaje() {
  alert("¡Listo!");
}
function addToInput(value) {
  document.getElementById('input').value += value;
}

function calculate() {
  var input = document.getElementById('input').value;
  var result = eval(input);
  document.getElementById('input').value = result;
}

function clearInput() {
  document.getElementById('input').value = '';
}

