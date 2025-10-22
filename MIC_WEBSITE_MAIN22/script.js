/* ---------- simple fade slider ---------- */
const slides = document.querySelectorAll('.slide');
const prev   = document.querySelector('.prev');
const next   = document.querySelector('.next');
let idx = 0;
let timer;

function show(n) {
  slides[idx].classList.remove('active');
  idx = (n + slides.length) % slides.length;
  slides[idx].classList.add('active');
}
function nextSlide() { show(idx + 1); }
function prevSlide() { show(idx - 1); }
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 6000);   // 6 s auto
}

prev.addEventListener('click', () => { prevSlide(); resetTimer(); });
next.addEventListener('click', () => { nextSlide(); resetTimer(); });

resetTimer(); // kick off auto-scroll


/* ---------- social icon hover (optional) ---------- */
document.querySelectorAll('.social-bar a').forEach(a => {
  a.addEventListener('mouseenter', () => a.style.transform = 'scale(1.15)');
  a.addEventListener('mouseleave', () => a.style.transform = 'scale(1)');
});