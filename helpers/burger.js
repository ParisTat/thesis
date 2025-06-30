// Περιμένουμε να φορτωθεί το DOM
document.addEventListener('DOMContentLoaded', () => {
    // Επιλέγουμε το κουμπί burger menu
    const menuToggle = document.querySelector('.menu-toggle');
    // Επιλέγουμε το στοιχείο nav
    const nav = document.querySelector('nav');
    // Επιλέγουμε το overlay που εμφανίζεται πίσω από το menu
    const overlay = document.querySelector('.overlay');

    if (menuToggle && nav && overlay) {
        // Όταν πατηθεί το burger κουμπί
        menuToggle.addEventListener('click', () => {
            // Εναλλάσσουμε το class 'active' για εμφάνιση ή κλείσιμο του menu
            nav.classList.toggle('active');
            // Αν το menu είναι ενεργό, απενεργοποιούμε το scroll της σελίδας
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Όταν πατηθεί το overlay (σκοτεινή περιοχή)
        overlay.addEventListener('click', () => {
            // Κλείνουμε το menu
            nav.classList.remove('active');
            // Επαναφέρουμε το scroll της σελίδας
            document.body.style.overflow = 'auto';
        });
    }
});
