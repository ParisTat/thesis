document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("form-status");

  if (!form || !statusDiv) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      statusDiv.textContent = "Συμπλήρωσε όλα τα πεδία.";
      statusDiv.style.color = "red";
      return;
    }

    statusDiv.textContent = "Το μήνυμά σου στάλθηκε με επιτυχία!";
    statusDiv.style.color = "green";

    form.reset();
  });
});
