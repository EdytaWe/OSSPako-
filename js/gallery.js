  let slideIndex = 1;
  document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Remove active class from all thumbnails
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    // Highlight the active thumbnail
    dots[slideIndex - 1].classList.add("active");
    // Set the caption text from the alt attribute
    captionText.textContent = dots[slideIndex - 1].alt;
  }