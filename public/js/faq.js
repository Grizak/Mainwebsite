document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-question");

  faqItems.forEach(function(item) {
    item.addEventListener("click", function() {
      const answer = this.nextElementSibling;

      // Toggle visibility of the answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
