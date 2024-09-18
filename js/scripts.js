// create elements
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
        hamburgerElement.classList.toggle('open');
        navElement.classList.toggle('open');
})

// current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();