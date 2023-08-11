document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Simple validation (you can add more validation as needed)
      if (!name || !email || !message) {
          alert("Please fill out all fields before submitting.");
          return;
      }

      // Display a thank you message
      const mainSection = document.querySelector(".main2");
      mainSection.innerHTML = "<h2>Thank You!</h2><p>Your message has been submitted.</p>";
  });
});
