// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger?.addEventListener('click',()=>{menu.classList.toggle('show');});

// Hero slideshow
const slides = [
  'photos/ss7.jpg',
  'photos/ss5.jpg',
  'photos/ss6.jpg'
];

const slideshow=document.getElementById('slideshow');
let current=0;
function mountSlides(){
  slides.forEach((src,i)=>{
    const div=document.createElement('div');
    div.className='slide'+(i===0?' active':'');
    div.style.backgroundImage=`url(${src})`;
    slideshow.appendChild(div);
  });
}
function rotate(){
  const nodes=[...slideshow.children];
  nodes[current].classList.remove('active');
  current=(current+1)%nodes.length;
  nodes[current].classList.add('active');
}
mountSlides();
setInterval(rotate,4000);

// Form
const form=document.getElementById('callForm');
const msg=document.getElementById('formMsg');
form?.addEventListener('submit', e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(form).entries());
  msg.style.display='block';
  msg.textContent=`Thanks ${data.name}! We'll email ${data.email} to confirm.`;
  form.reset();
});

document.getElementById('year').textContent=new Date().getFullYear();
// Scroll reveal effect
const sections = document.querySelectorAll("section, .card, .testimonial");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// --- WHO WE ARE Slideshow ---
const whoSlides = [
  'photos/ss7.jpg',
  'photos/ss5.jpg',
  'photos/ss6.jpg'
];

const whoSlideshow = document.getElementById('whoSlideshow');
let whoIndex = 0;

if (whoSlideshow) {
  // Mount images
  whoSlides.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = `url(${src})`;
    whoSlideshow.appendChild(div);
  });

  // Rotate every 5 seconds
  setInterval(() => {
    const slides = [...whoSlideshow.children];
    slides[whoIndex].classList.remove('active');
    whoIndex = (whoIndex + 1) % slides.length;
    slides[whoIndex].classList.add('active');
  }, 5000);
}
// Reveal-on-scroll for .reveal elements (services cards + section)
(function revealOnScroll(){
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting) {
        e.target.classList.add('in');
        // optional: unobserve to avoid re-animating
        io.unobserve(e.target);
      }
    });
  }, {threshold: .15});

  els.forEach(el => io.observe(el));
})();
