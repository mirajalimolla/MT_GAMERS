// Set header scrolling effect to change background and position
$(function header() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#header").addClass("change_header");
        } else{
            $("#header").removeClass("change_header");
        }
    });
});

// Create typing Effect
let effect = new Typed('.typing', {
    strings: ['Youtuber', 'Gamer', 'Content Creator', 'Live Steamer'],
    typeSpeed: 100,
    backSpeed:50,
    loop:true
});

// Casual Image change
let index = 0;
let imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
function change_image(){
    console.log(document.querySelector(".cngImg").src=imgArr[index]);
    if(++index < imgArr.length){
            setTimeout(change_image, 2000);
    }
}
change_image();

// Video section sceolling arrow create
let container = document.querySelector('#video_slider')
let slider = document.querySelector('.slider_container');
let slides = document.querySelector('.slider_container').length;
let left_arrow = document.querySelector('#left_btn');
let right_arrow = document.querySelector('#right_btn');


let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth;
let prevKeyActive = false;
let nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        left_arrow.style.display="block";
    }
    if (currentPosition < slidesCount) {
        right_arrow.style.display="block";
    }
    if (currentPosition >= slidesCount) {
        right_arrow.style.display="none";
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        left_arrow.style.display="none";
    }
    if (currentPosition < slidesCount) {
        right_arrow.style.display="block";
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        right_arrow.style.display="none";
    }
    if (currentPosition > 0) {
        left_arrow.style.display="block";
    }
};
