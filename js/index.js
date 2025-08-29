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
// Call Button
const callButtons = document.getElementsByClassName("call-button");
for (let button of callButtons) {
  button.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("Finished coins! Please recharge.");
      return;
    }

    const card = button.parentNode.parentNode;
    const serviceName = card.querySelector(".helpline-title").innerText;
    const number = card.querySelector(".helpline-number").innerText;

    coinCount = coinCount - 20;
    getElement("coin-count").innerText = coinCount;

    alert(`Calling ${serviceName} at ${number}`);

    // add to history
    const historyList = getElement("history-list");
    const div = document.createElement("div");
    div.className =
      "bg-gray-100 p-3 rounded-md flex justify-between items-center mb-2";

    // time (AM/PM) add
    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    div.innerHTML = `
      <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-sm text-gray-700">${number}</p>
      </div>
      <span class="text-sm text-gray-600">${time}</span>
    `;
    historyList.prepend(div);
  });
}
