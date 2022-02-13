// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);

// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
// }

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}