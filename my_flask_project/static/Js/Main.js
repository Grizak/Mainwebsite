let password = '10Elias28'
function adminlogin () {
  // Get a reference to the input element
  let inputElement = document.getElementById('adminloginprompt');

  // Get the value of the input element
  let inputPassword = inputElement.value;

  if (inputPassword === password) {
    window.location.href = 'admin.html';
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

// Establish WebSocket connection
// const socket = io();

// Receive initial data from server
/*socket.on('data', (data) => {
    console.log('Initial data received:', data);
    // Update UI with initial data
    // Example: document.getElementById('variable1').innerText = data.variable1;
});

// Handle real-time updates from server
socket.on('data', (data) => {
    console.log('Real-time update received:', data);
    // Update UI with updated data
    // Example: document.getElementById('variable1').innerText = data.variable1;
});

     // Check if SSE is supported by the browser
     if (typeof(EventSource) !== 'undefined') {
      // Create SSE connection
      const eventSource = new EventSource('/sse');

      // Handle SSE messages
      eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log('SSE update received:', data);
          // Update UI with SSE data
          // Example: document.getElementById('variable1').innerText = data.variable1;
      };
  } else {
      console.log('SSE not supported. Fallback to polling...');
      // Fallback to polling mechanism
      // Implement polling logic here
  }*/