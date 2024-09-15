// Open and close the modal for adding products
const modal = document.getElementById('addProductModal');
const addProductBtn = document.querySelector('.btn-add-product');
const closeModalBtn = document.querySelector('.close-btn');

addProductBtn.onclick = function() {
  modal.style.display = 'block';
};

closeModalBtn.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Handle form submission (this would be linked to your backend)
const addProductForm = document.getElementById('addProductForm');
addProductForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;

  // Add product using an API call (adjust based on your server setup)
  fetch('/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      description,
      price
    })
  })
  .then(response => response.json())
  .then(data => {
    alert('Product added successfully!');
    modal.style.display = 'none';
    // Reload product list or update DOM
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
