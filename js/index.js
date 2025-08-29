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

// Copy Button
const copyButtons = document.getElementsByClassName("copy-button");
for (let button of copyButtons) {
  button.addEventListener("click", function () {
    const card = button.parentNode.parentNode;
    const helplineNumber = card.querySelector(".helpline-number").innerText;

    navigator.clipboard.writeText(helplineNumber);
    copyCount++;
    getElement("copy-count").innerText = copyCount;
    alert(`Number ${helplineNumber} copied!`);
  });
}
