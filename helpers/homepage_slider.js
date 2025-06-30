// Περιμένουμε το DOM να φορτώσει πριν εκτελέσουμε τον κώδικα
document.addEventListener("DOMContentLoaded", function () {
  // Επιλέγουμε όλα τα στοιχεία με κλάση 'slide'
  const slides = document.querySelectorAll(".slide");
  // Επιλέγουμε το κουμπί προηγούμενης διαφάνειας
  const prevBtn = document.querySelector(".prev");
  // Επιλέγουμε το κουμπί επόμενης διαφάνειας
  const nextBtn = document.querySelector(".next");
  // Ο δείκτης της τρέχουσας διαφάνειας
  let currentIndex = 0;

  /**
   * Εμφανίζει τη διαφάνεια με το συγκεκριμένο index
   * Αφαιρεί την κλάση 'active' από όλες και προσθέτει στη νέα
   */
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  // Όταν πατηθεί το κουμπί προηγούμενης διαφάνειας
  prevBtn.addEventListener("click", () => {
    // Μειώνουμε το index, κυκλικά
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Όταν πατηθεί το κουμπί επόμενης διαφάνειας
  nextBtn.addEventListener("click", () => {
    // Αυξάνουμε το index, κυκλικά
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Εμφανίζουμε την αρχική διαφάνεια
  showSlide(currentIndex);
});
