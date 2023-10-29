// create a function save() that logs out the count when it's called
// use the += technique
// create the save feature
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;

function  increment() {
  count += 1;
  countEl.innerText = count
  console.log(count)
}

function save() {
  let countStr = count + " - "
  // saveEl.innerText += " " + countStr
  saveEl.textContent += countStr
  console.log(countStr)
}

