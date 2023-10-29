let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");

let count = 0;
let totalEntries = 0;
let isAnimating = false; // Add a flag to prevent multiple clicks during animation

function increment() {
  if (!isAnimating) {
    count += 1;
    countEl.textContent = count;
    isAnimating = true; // Set the flag to prevent multiple clicks
    incrementBtn.classList.add("bouncing");
    incrementBtn.addEventListener("animationend", removeAnimationClass);
  }
}

function save() {
  if (count > 0) {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(countStr);
    totalEntries += count;
    totalEl.textContent = totalEntries;
    saveBtn.classList.add("bouncing");
    saveBtn.addEventListener("animationend", removeAnimationClass);
    console.log(totalEntries);
    count = 0;
  }
}

function removeAnimationClass() {
  this.classList.remove("bouncing");
  this.removeEventListener("animationend", removeAnimationClass);
  isAnimating = false; // Reset the flag to allow clicking again
}

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
