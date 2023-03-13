// Código para que el nav sea transparante pero si hago scroll se vuelve sólido con background gradiente 

const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
if (window.scrollY > 56) {
    navEl.classList.add('navbar-scrolled')
} else if (window.scrollY < 56) {
    navEl.classList.remove('navbar-scrolled')
}
});

// ScrollReveal Header (nav y hero) y 1er section

ScrollReveal().reveal('h1', { delay: 0 });
ScrollReveal().reveal('.button-nav', { delay: 100 });
ScrollReveal().reveal('.azulito', { delay: 200 });
ScrollReveal().reveal('.h2-liberamos', { delay: 300 });

// Código para hacer el efecto de contador de números y ScrollReveal

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);

});

ScrollReveal().reveal('.p-1', { delay: 100 });
ScrollReveal().reveal('.p-2', { delay: 300 });
ScrollReveal().reveal('.p-3', { delay: 500 });

