let password = '10Elias28'
function adminlogin () {
  // Get a reference to the input element
  let inputElement = document.getElementById('adminloginprompt');

  // Get the value of the input element
  let inputPassword = inputElement.value;

  if (inputPassword === password) {
    window.location.href = 'admin.html';
  } else {
    window.location.href = '../index.html';
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
