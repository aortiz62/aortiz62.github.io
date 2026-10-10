const listElement = document.getElementById("countdown-list");
let count = 10;

const countdownTimer = setInterval(() => {
  if (count > 0) {
    const listItem = document.createElement("li");
    listItem.textContent = `${count}...`;
    listElement.appendChild(listItem);
    count--;
  } else {
    clearInterval(countdownTimer);
    
    const celebrationItem = document.createElement("li");
    celebrationItem.textContent = "Happy New Year! 🎉🎆🍾";
    celebrationItem.className = "celebration";
    listElement.appendChild(celebrationItem);
  }
}, 1000);