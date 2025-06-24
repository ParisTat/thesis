document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fp-slide");
  const dots = document.querySelectorAll(".dot");

  function setActiveDot(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

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

  window.addEventListener("scroll", () => {
    const current = getCurrentSectionIndex();
    setActiveDot(current);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      sections[i].scrollIntoView({ behavior: "smooth" });
    });
  });

  setActiveDot(0);
});
