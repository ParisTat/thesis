// Περιμένουμε να φορτωθεί το DOM
document.addEventListener("DOMContentLoaded", function () {
    // Επιλέγουμε το στοιχείο της φόρμας
    const form = document.getElementById("contactForm");
    // Επιλέγουμε το div που θα εμφανίζει μηνύματα επιτυχίας ή λάθους
    const statusDiv = document.getElementById("form-status");

    // Αν δεν υπάρχει η φόρμα ή το status div, σταματάμε
    if (!form || !statusDiv) return;

    // Όταν υποβληθεί η φόρμα
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Ακυρώνουμε το default submit

        // Παίρνουμε τα πεδία και αφαιρούμε τα περιττά κενά
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Έλεγχος αν όλα τα πεδία είναι συμπληρωμένα
        if (!name || !email || !message) {
            statusDiv.textContent = "Συμπλήρωσε όλα τα πεδία.";
            statusDiv.style.color = "red";
            return;
        }

        // Εμφανίζουμε μήνυμα επιτυχίας
        statusDiv.textContent = "Το μήνυμά σου στάλθηκε με επιτυχία!";
        statusDiv.style.color = "green";

        // Καθαρίζουμε τη φόρμα
        form.reset();
    });
});
