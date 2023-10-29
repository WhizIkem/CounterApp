// add total count to the page

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let count = 0
let totalEntries = 0

function  increment() {
  count += 1;
  countEl.textContent = count
  console.log(count)
}

function save() {
  if (count > 0) {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(countStr)
    totalEntries += count
    totalEl.textContent = totalEntries
    console.log(totalEntries)
    count = 0
  }
}

