// Function to load the header from header.html
function loadHeader() {
  fetch('/public/html/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
}

// Function to load the footer from footer.html
function loadFooter() {
  fetch('/public/html/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
}

function wonload () {
  loadHeader();
  loadFooter();
}

window.onload = wonload()