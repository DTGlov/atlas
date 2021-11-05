const bars = document.querySelector('.bars');
const resNav = document.querySelector('.resNav');
const close = document.querySelector('.fa-times');

bars.addEventListener('click', () => {
    if (resNav.classList.contains('hidden')) {
        resNav.classList.remove('hidden')
    }
});

close.addEventListener('click', () => {
    resNav.classList.add('hidden');
});