let serverIpElement

window.addEventListener("load", () => {
  serverIpElement = document.getElementById("server-ip");
  setClickEvents();
})

const setClickEvents = (elements) => {
  serverIpElement.addEventListener("click", () => {
    document.execCommand("copy");
  });
  
  serverIpElement.addEventListener("copy", serverIpCopy)
}

const serverIpCopy = (event) => {
  event.preventDefault();
  
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", serverIpElement.textContent)
    createPop("Copied!", serverIpElement);
  }
}

const createPop = (text, parrent) => {
  const existingChild = document.getElementById("pop-up");
  if (existingChild)
  parrent.removeChild(existingChild);
  
  const child = document.createElement("span");
  child.className = "pop-up"
  child.id = "pop-up"
  child.innerText = text;
  parrent.appendChild(child);
  timeoutKillingYounglings(parrent, "pop-up")
}

const timeoutKillingYounglings = (parrent, childId) => {
  setTimeout(() => {
    const child = document.getElementById(childId);
    parrent.removeChild(child);
  }, 2500)
}