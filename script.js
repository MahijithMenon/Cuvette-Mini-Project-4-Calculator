let displayDiv = document.getElementById('display');
let displayInput = 0;

function getInput(input) {
  let displayInput = '';
  displayInput += input;
  if (displayDiv.innerHTML == 0) {
    displayDiv.innerHTML = '';
  }
  displayDiv.innerHTML += displayInput;
}

function resetDisplay() {
  displayDiv.innerHTML = '0';
}

function calculate() {
  let result = eval(displayDiv.innerHTML);
  displayDiv.innerHTML = result;
}

function deleteDigit() {
  let displayInput = displayDiv.innerHTML;
  if (displayDiv.innerHTML.length == 1) {
    displayDiv.innerHTML = '0';
  } else {
    displayDiv.innerHTML = displayInput.substring(0, displayInput.length - 1);
  }
}
