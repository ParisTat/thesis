document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-images img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let current = 0;

    function showSlide(nextIndex, direction) {
        if (nextIndex === current) return;

        const currentImage = images[current];
        const nextImage = images[nextIndex];

        // Αφαιρούμε προηγούμενα classes
        images.forEach(img => img.classList.remove(
            'active', 'exit-left', 'exit-right', 'enter-from-left', 'enter-from-right'
        ));

        // Ορισμός κατεύθυνσης
        if (direction === 'next') {
            currentImage.classList.add('exit-left');
            nextImage.classList.add('enter-from-right');
        } else {
            currentImage.classList.add('exit-right');
            nextImage.classList.add('enter-from-left');
        }

        // Force reflow για transition
        void nextImage.offsetWidth;

        // Ενεργοποίηση επόμενης εικόνας
        nextImage.classList.add('active');

        // Ενημέρωση current index
        current = nextIndex;

        updateButtons();
    }

    function updateButtons() {
        if (current === 0) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'none';
        }
    }


    nextBtn.addEventListener('click', () => {
        const nextIndex = (current + 1) % images.length;
        showSlide(nextIndex, 'next');
    });

    prevBtn.addEventListener('click', () => {
        const prevIndex = (current - 1 + images.length) % images.length;
        showSlide(prevIndex, 'prev');
    });

    // Αρχικό setup
    images[current].classList.add('active');
    updateButtons();
});
