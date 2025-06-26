document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    const nextBtn = document.querySelector('.lightbox .next');
    const prevBtn = document.querySelector('.lightbox .prev');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    let currentIndex = 0;

    function showImage(index) {
        const img = galleryImages[index];
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        currentIndex = index;
        lightbox.style.display = 'flex';
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
        });
    });

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    });

    // Close on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
