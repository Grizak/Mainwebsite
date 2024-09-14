// Function to load external HTML content into the page
function loadContent(selector, file) {
  fetch(file)
      .then(response => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.text();
      })
      .then(data => {
          document.querySelector(selector).innerHTML = data;
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}

// Load header and footer
window.onload = function() {
  loadContent("#header", "../html/header.html");
  loadContent("#footer", "../html/footer.html");
};
