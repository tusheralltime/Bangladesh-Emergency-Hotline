function getElement(id) {
  return document.getElementById(id);
}

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//  Heart Button click then increase the count 
const heartButtons = document.getElementsByClassName("heart-button");
for (let button of heartButtons) {
  button.addEventListener("click", function () {
    heartCount++;
    getElement("heart-count").innerText = heartCount;
  });
}