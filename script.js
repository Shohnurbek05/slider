const block = document.querySelector(".block");
const images = document.querySelectorAll(".img-block__img");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");


// VARIABLES
let counter = 0;             
let timer


// FUNCTIONS next
const nextImage = function () {
    images[counter].classList.remove("active");
    counter++;
    if (counter == images.length) {
    counter = 0;
    }
    images[counter].classList.add("active");
}

// FUNCTIONS prev
const prevImage = function () {
    images[counter].classList.remove("active");
    counter--;
    if (counter == -1) {
        counter = images.length - 1;
    }
    images[counter].classList.add("active");
}


// AUTOPLAY
const autoplay = function () {
    timer = setInterval(nextImage, 2000)
}

autoplay();

// CLAER TIMER
const clearTimer = function () {
    clearInterval(timer);
}


// EVENT LISTENER
btnNext.addEventListener("click", nextImage);
btnPrev.addEventListener("click", prevImage);
block.addEventListener("mousemove", clearTimer);
block.addEventListener("mouseleave", autoplay);


// setInterval(nextImage, 2000);         /* 2000 bu MILLISEKUND */  /* HAR 2 sekundda korsatilgan funksiya ishlidi */

// const timercha = setTimeout(() => {
// console.log("Hello world");
// }, 2000)                              /* BU faqat korsatilgan vaqtta 1 ta ishlidi */

// setTimeout(() => {
// console.log("Hello world");
// }, 2000)                                 /* CLEAR la tozalavoradi */

// clearInterval(timercha);
// clearTimeout(timercha);