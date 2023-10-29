  // create a function save() that logs out the count when it's called

let count = 0;
let countEl = document.getElementById("count-el");

function  increment() {
  console.log("The button was clicked");
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  console.log(count);
  
}

save();