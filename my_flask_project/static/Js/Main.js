let password = '10Elias28'
function adminlogin () {
  // Get a reference to the input element
  let inputElement = document.getElementById('adminloginprompt');

  // Get the value of the input element
  let inputPassword = inputElement.value;

  if (inputPassword === password) {
    window.location.href = 'logedin/admin.html';
  } else {
    window.location.href = 'index.html';
  }
}

function lastupdated() {
  let newDate = prompt('Skriv dagens datum i detta format (dd/mm-åååå)');
  let newDateUpdated = `The last time this page was updated was ${newDate}`;

  // Update the content of the element dynamically
  let lastUpdatedElement = document.getElementById('lastupdated');
  if (lastUpdatedElement) {
    lastUpdatedElement.textContent = newDateUpdated;
  }
}

while (1 === 1) {
  document.getElementById('mackiethumpgostock').textContent = mackieThumpGoStock
  document.getElementById('superluxHMD66xstock').textcontent = superluxHMD66xStock
}

let mackieThumpGoStockLeft
let mackieThumpGoMax
let mackieThumpGoStock
let superluxHMD66xStockLeft
let SuperluxHMD66xMax
let superluxHMD66xStock

function setStockMackieThumpGo () {
  mackieThumpGoStockLeft = parseInt(prompt('Hur mycket har vi kvar i lager'))
  mackieThumpGoMax = parseInt(prompt('Hur många har vi totalt'))
  mackieThumpGoStock = `Stock left: ${mackieThumpGoStockLeft}/${mackieThumpGoMax}`
  document.getElementById('mackiethumpgostock').textContent = mackieThumpGoStock
}

function navigateMackieThumpGo () {
  window.location.href = "products/mackiethumpgo.html"
}

function setStockSuperluxHMD66x () {
  superluxHMD66xStockLeft = parseInt(prompt('Hur mycket har vi kvar i lager'))
  SuperluxHMD66xMax = parseInt(prompt('Hur många har vi totalt'))
  superluxHMD66xStock = `Stock left: ${superluxHMD66xStockLeft}/${SuperluxHMD66xMax}`
  document.getElementById('superluxHMD66xstock').textcontent = superluxHMD66xStock
}

function navigateSuperluxHMD66x () {
  window.location.href = "products/superluxHMD66x.html"
}