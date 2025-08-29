function getElement(id) {
  const element =  document.getElementById(id);
  return element;
}

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Event Delegation
getElement("main").addEventListener("click", function (e) {
  const target = e.target;

  // Heart Button
  if (target.className.includes("heart-button") || target.parentNode.className.includes("heart-button")) {
    heartCount++;
    getElement("heart-count").innerText = heartCount;
  }

  // Copy Button
  if (target.className.includes("copy-button") || target.parentNode.className.includes("copy-button")) {
    let button;
    if (target.className.includes("copy-button")) {
      button = target;
    } else {
      button = target.parentNode;
    }

    const card = button.parentNode.parentNode;
    const helplineNumber = card.querySelector(".helpline-number").innerText;

    navigator.clipboard.writeText(helplineNumber);
    copyCount++;
    getElement("copy-count").innerText = copyCount;

    alert("Number " + helplineNumber + " copied!");
  }

  // Call Button
  if (target.className.includes("call-button") || target.parentNode.className.includes("call-button")) {
    let button;
    if (target.className.includes("call-button")) {
      button = target;
    } else {
      button = target.parentNode;
    }

    // Coin check
    if (coinCount < 20) {
      alert("Finished coins! Please recharge.");
      return;
    }

    const card = button.parentNode.parentNode;
    const helplineName = card.querySelector(".helpline-title").innerText;
    const helplineNumber = card.querySelector(".helpline-number").innerText;

    coinCount = coinCount - 20;
    getElement("coin-count").innerText = coinCount;

    alert("Calling " + helplineName + " at " + helplineNumber);

    // Add to history
    const historyList = getElement("history-list");
    const div = document.createElement("div");
    div.className = "bg-gray-100 p-3 rounded-md flex justify-between items-center mb-2";

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

       div.innerHTML = `
      <div>
        <p class="font-bold">${helplineName}</p>
        <p class="text-sm text-gray-700">${helplineNumber}</p>
      </div>
      <span class="text-sm text-gray-600">${time}</span>
    `;

    historyList.prepend(div);
  }
});

// History Clear
getElement("clear-history").addEventListener("click", function () {
  getElement("history-list").innerHTML = "";
});
