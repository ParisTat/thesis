// back_to_top.js

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
