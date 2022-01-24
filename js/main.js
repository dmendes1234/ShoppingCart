const cartBtn = document.querySelector('.cartBtn');
const cart = document.querySelector('.cart');
const badge = document.querySelector('.badge');

cartBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    badge.classList.toggle('display-none');
    cart.classList.toggle('display-block');
})

const scrollUpBtn = document.querySelector('#scrollUpBtn');
const scrollDownBtn = document.querySelector('#scrollDownBtn');
const items = document.querySelectorAll('.item');

let slideIndex = 0;
scrollDownBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex === 1) {
        scrollUpBtn.disabled = false;
        hideShowItem(items[0], items[3]);
    }
    if (slideIndex === 2) {
        scrollDownBtn.disabled = true;
        hideShowItem(items[1], items[4]);
    }
})

scrollUpBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex === 0) {
        scrollUpBtn.disabled = true;
        hideShowItem(items[3], items[0]);
    }
    if (slideIndex === 1) {
        scrollDownBtn.disabled = false;
        hideShowItem(items[4], items[1]);
    }
})

function hideShowItem(itemToHide, itemToShow) {
    itemToShow.classList.replace('outer', 'inner');
    itemToHide.classList.replace('inner', 'outer');
}



