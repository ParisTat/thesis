// Περιμένουμε να φορτωθεί το DOM
document.addEventListener("DOMContentLoaded", () => {
    // Επιλέγουμε το κουμπί "Back to Top"
    const backToTopBtn = document.getElementById("backToTop");

    if (!backToTopBtn) return; // Αν δεν υπάρχει το κουμπί, σταματάμε

    // Όταν γίνεται scroll στη σελίδα
    window.addEventListener("scroll", () => {
        // Αν έχει κατέβει πάνω από 200 pixels, εμφανίζουμε το κουμπί
        if (window.scrollY > 200) {
            backToTopBtn.style.display = "block";
        } else {
            // Αλλιώς το κρύβουμε
            backToTopBtn.style.display = "none";
        }
    });

    // Όταν πατηθεί το κουμπί
    backToTopBtn.addEventListener("click", () => {
        // Κάνουμε smooth scroll προς την κορυφή
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
