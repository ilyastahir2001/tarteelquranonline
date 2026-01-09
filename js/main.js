// Mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Testimonial slider
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showSlide(index) {
    testimonials.forEach((t, i) => {
        t.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}, 5000);

// Parallax
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".parallax");
    hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});

