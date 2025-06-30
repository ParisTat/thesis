// Περιμένουμε να φορτωθεί το DOM
document.addEventListener('DOMContentLoaded', () => {
    // Επιλέγουμε όλες τις εικόνες μέσα στο div με κλάση 'gallery-grid'
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    // Επιλέγουμε το lightbox container
    const lightbox = document.getElementById('lightbox');
    // Επιλέγουμε το στοιχείο img μέσα στο lightbox
    const lightboxImg = document.getElementById('lightbox-img');
    // Επιλέγουμε το caption για να εμφανίζουμε alt text
    const lightboxCaption = document.getElementById('lightboxCaption');
    // Επιλέγουμε το κουμπί κλεισίματος
    const closeBtn = document.querySelector('.lightbox .close');
    // Επιλέγουμε τα κουμπιά πλοήγησης
    const nextBtn = document.querySelector('.lightbox .next');
    const prevBtn = document.querySelector('.lightbox .prev');

    let currentIndex = 0; // Δείκτης της τρέχουσας εικόνας

    /**
     * Εμφανίζει την εικόνα με index στο lightbox
     */
    function showImage(index) {
        const img = galleryImages[index];
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        currentIndex = index;
        lightbox.style.display = 'flex';
    }

    // Όταν γίνεται click σε κάθε εικόνα, εμφανίζουμε το lightbox
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Όταν πατηθεί το κουμπί κλεισίματος
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Όταν πατηθεί το κουμπί επόμενης εικόνας
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    });

    // Όταν πατηθεί το κουμπί προηγούμενης εικόνας
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    });

    // Κλείσιμο του lightbox όταν πατηθεί το background
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
