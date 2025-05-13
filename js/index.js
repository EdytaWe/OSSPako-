// --- script.js ---

// Twoje dane slajdów (bez thumbs)
const slides = [
  {
    quote: "Kurs spawacza w tej szkole przewyższył moje oczekiwania – prowadzący tłumaczą każde zagadnienie jasno i z pasją. Dzięki praktycznym zajęciom na nowoczesnych stanowiskach czuję się pewnie przy każdym typie spoiny. Polecam każdemu, kto chce zdobyć solidne umiejętności i certyfikat uznawany w całej branży.",
    author: "Adam Kowalski",
    role: "Uczeń",
    mainImage: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Świetna organizacja zajęć i kameralne grupy pozwoliły mi skupić się na doskonaleniu techniki. Materiały szkoleniowe są aktualne, a warsztaty prowadzone w realnych warunkach warsztatowych. Już po kilku tygodniach byłem gotowy, by samodzielnie realizować zlecenia spawalnicze.",
      author: "Maksym Nowak",
      role: "Uczeń",
      mainImage: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "Zleciliśmy absolwentom tej szkoły spawanie elementów konstrukcji stalowej i byliśmy pod wrażeniem precyzji oraz czasu realizacji. Ich profesjonalne podejście i wysoka jakość spoin przekroczyły nasze oczekiwania. Z pewnością skorzystamy ponownie przy kolejnych projektach.",
      author: "Alex Smith",
      role: "Właściciel Opakmet",
      mainImage: "https://randomuser.me/api/portraits/men/24.jpg"
  }
];

// Stałe miniaturki, zawsze te same
const thumbsImages = [
  "../assets/spaw1.jpg",
  "../assets/spaw2.jpg",
  "../assets/spaw3.jpg"
];

let current = 0;
const quoteEl       = document.querySelector(".testimonials__quote");
const nameEl        = document.querySelector(".author__name");
const roleEl        = document.querySelector(".author__role");
const mainImgEl     = document.querySelector(".images__main img");
const thumbsContainer = document.querySelector(".images__thumbs");
const dotsContainer   = document.querySelector(".testimonials__dots");

// inicjalizacja thumbs (statyczne) + dots (dynamiczne wg liczby slajdów)
thumbsImages.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.dataset.idx = i;
  img.addEventListener("click", () => {
    goToSlide(i);
    resetInterval();
  });
  thumbsContainer.appendChild(img);
});

slides.forEach((_, i) => {
  const btn = document.createElement("button");
  btn.dataset.idx = i;
  btn.addEventListener("click", () => {
    goToSlide(i);
    resetInterval();
  });
  dotsContainer.appendChild(btn);
});

function updateSlide(idx) {
  const s = slides[idx];
  quoteEl.textContent   = s.quote;
  nameEl.textContent    = s.author;
  roleEl.textContent    = s.role;
  mainImgEl.src         = s.mainImage;

  // tylko przełączamy klasę .active na statycznych thumbs
  thumbsContainer.querySelectorAll("img").forEach((imgEl, i) => {
    imgEl.classList.toggle("active", i === idx);
  });
  // oraz na kropkach
  dotsContainer.querySelectorAll("button").forEach((dot, i) => {
    dot.classList.toggle("active", i === idx);
  });
}

function goToSlide(idx) {
  current = idx;
  updateSlide(current);
}

// auto-rotate co 5s
let interval = setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlide(current);
}, 5000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlide(current);
  }, 5000);
}

// startujemy od pierwszego
goToSlide(0);

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".stats-section");
    const counters = section.querySelectorAll(".counter");
    let animated = false;
  
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.dataset.target;
          const duration = 2000;       // czas animacji w ms
          const interval = 20;         // co ile ms aktualizować licznik
          const steps = Math.ceil(duration / interval);
          const increment = Math.ceil(target / steps);
          let current = 0;
  
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = current;
            }
          }, interval);
        });
        io.unobserve(section);
      }
    }, { threshold: 0.5 });
  
    io.observe(section);
  });
  
    