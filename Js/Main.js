document.getElementById("product").addEventListener("change", function() {
  var selectedOption = this.value;
  if (selectedOption) {
    window.location.href = selectedOption; // Navigate to the selected URL
    // Alternatively, you can call a JavaScript function based on the selected option:
    // handleOption(selectedOption);
  }
});