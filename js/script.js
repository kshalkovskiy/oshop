const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-text', {delay:200});
sr.reveal ('.home-img', {delay:300});
sr.reveal ('.container', {delay:300});

sr.reveal ('.about-img', {});
sr.reveal ('.about-tex', {delay:300});

sr.reveal ('.middle-text', {});
sr.reveal ('.row-btn,.shop-content', {delay:300});

sr.reveal ('.review-content,.contact', {delay:300});

sr.reveal('.login-form', { delay: 400, afterReveal: (el) => el.classList.add('reveal') });