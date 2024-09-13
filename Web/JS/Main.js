function loadHeader() {
  fetch('/Web/HTML/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
  fetch('/Web/HTML/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
}

function wO () {
  loadHeader()
  loadFooter()
}

window.onload = wO();
