// Περιμένουμε να φορτωθεί πλήρως το DOM
document.addEventListener('DOMContentLoaded', () => {
    // Επιλέγουμε όλες τις εικόνες μέσα στο slider
    const images = document.querySelectorAll('.slider-images img');
    // Επιλέγουμε το κουμπί "επόμενο"
    const nextBtn = document.querySelector('.next');
    // Επιλέγουμε το κουμπί "προηγούμενο"
    const prevBtn = document.querySelector('.prev');

    let current = 0; // Ο δείκτης της τρέχουσας εικόνας

    /**
     * Εμφανίζει μια νέα εικόνα με βάση το index και την κατεύθυνση.
     * Προσθέτει τις απαραίτητες κλάσεις για τα animations.
     */
    function showSlide(nextIndex, direction) {
        if (nextIndex === current) return; // Αν είναι ίδια εικόνα, δεν κάνουμε τίποτα

        const currentImage = images[current];
        const nextImage = images[nextIndex];

        // Αφαιρούμε όλες τις προηγούμενες κλάσεις από όλες τις εικόνες
        images.forEach(img => img.classList.remove(
            'active',
            'exit-left',
            'exit-right',
            'enter-from-left',
            'enter-from-right'
        ));

        // Ανάλογα με την κατεύθυνση
        if (direction === 'next') {
            currentImage.classList.add('exit-left');
            nextImage.classList.add('enter-from-right');
        } else {
            currentImage.classList.add('exit-right');
            nextImage.classList.add('enter-from-left');
        }

        // Εξαναγκάζουμε reflow για να δουλέψει το transition
        void nextImage.offsetWidth;

        // Κάνουμε την επόμενη εικόνα ενεργή
        nextImage.classList.add('active');

        // Ενημερώνουμε το τρέχον index
        current = nextIndex;

        updateButtons();
    }

    /**
     * Κρύβει ή εμφανίζει τα κουμπιά ανάλογα με τη θέση
     */
    function updateButtons() {
        if (current === 0) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'none';
        }
    }

    // Event listener για το κουμπί "επόμενο"
    nextBtn.addEventListener('click', () => {
        const nextIndex = (current + 1) % images.length;
        showSlide(nextIndex, 'next');
    });

    // Event listener για το κουμπί "προηγούμενο"
    prevBtn.addEventListener('click', () => {
        const prevIndex = (current - 1 + images.length) % images.length;
        showSlide(prevIndex, 'prev');
    });

    // Αρχικοποίηση slider: πρώτη εικόνα ενεργή και ενημέρωση κουμπιών
    images[current].classList.add('active');
    updateButtons();
});
