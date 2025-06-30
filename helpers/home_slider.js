// Περιμένουμε να φορτωθεί το DOM
document.addEventListener("DOMContentLoaded", () => {
  // Επιλέγουμε όλες τις sections με κλάση 'fp-slide'
  const sections = document.querySelectorAll(".fp-slide");
  // Επιλέγουμε όλα τα dots που χρησιμεύουν για πλοήγηση
  const dots = document.querySelectorAll(".dot");

  /**
   * Θέτει το ενεργό dot με βάση το index
   */
  function setActiveDot(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  /**
   * Υπολογίζει ποιο section είναι πιο κοντά στην κορυφή του viewport
   * για να τονίσουμε το αντίστοιχο dot
   */
  function getCurrentSectionIndex() {
    let index = 0;
    let minOffset = Infinity;

    sections.forEach((sec, i) => {
      const offset = Math.abs(sec.getBoundingClientRect().top);
      if (offset < minOffset) {
        minOffset = offset;
        index = i;
      }
    });

    return index;
  }

  // Όταν γίνεται scroll, ενημερώνουμε ποιο dot είναι ενεργό
  window.addEventListener("scroll", () => {
    const current = getCurrentSectionIndex();
    setActiveDot(current);
  });

  // Προσθέτουμε click στα dots για smooth scroll προς το section
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      sections[i].scrollIntoView({ behavior: "smooth" });
    });
  });

  // Θέτουμε αρχικά το πρώτο dot ως ενεργό
  setActiveDot(0);
});
