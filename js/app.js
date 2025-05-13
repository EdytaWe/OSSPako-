// JavaScript — dopisz na końcu body lub w osobnym pliku .js
document.addEventListener('DOMContentLoaded', function() {
    const openBtn  = document.querySelector('.mobile__nav');
    const closeBtn = document.getElementById('closeMenu');
    const menu     = document.getElementById('mobileMenu');
  
    openBtn.addEventListener('click', () => {
      menu.classList.add('open');
    });
  
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  
    // opcjonalnie: kliknięcie poza menu zamyka je
    menu.addEventListener('click', e => {
      if (e.target === menu) {
        menu.classList.remove('open');
      }
    });
  });

  window.addEventListener("scroll", function() {
    let scrollButton = document.getElementById("scrollToTop");
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollPosition > pageHeight / 3) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const pre = document.querySelector(".pre__header");
  if (!pre) return;

  // zmierz wysokość pre-headera i ustaw zmienną CSS
  const h = pre.getBoundingClientRect().height;
  document.body.style.setProperty("--pre-header-height", `${h}px`);

  const threshold = window.innerHeight * 0.5; // 50vh

  const onScroll = () => {
    if (window.scrollY > threshold) {
      if (!pre.classList.contains("fixed")) {
        pre.classList.add("fixed");
        document.body.classList.add("has-fixed-preheader");
      }
    } else {
      if (pre.classList.contains("fixed")) {
        pre.classList.remove("fixed");
        document.body.classList.remove("has-fixed-preheader");
      }
    }
  };

  window.addEventListener("scroll", onScroll);
  // odpal raz, na wypadek gdyby refresh był już poniżej threshold
  onScroll();
});