// create a function save() that logs out the count when it's called
// Refresh the count when the save() function is called

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;

function  increment() {
  count += 1;
  countEl.textContent = count
  console.log(count)
}

function save() {
  let countStr = count + " - "
  // saveEl.innerText += " " + countStr
  saveEl.textContent += countStr
  console.log(countStr)
  countEl.textContent = 0
  count = 0
}

