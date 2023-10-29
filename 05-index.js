// document.getElementById("people-count").innerText = 5;
// make button interactive
// initialze the count as 0, listen for clicks on the increment button, and increment the count each time the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0;
let countEl = document.getElementById("count-el");

function  increment() {
  console.log("The button was clicked");
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}