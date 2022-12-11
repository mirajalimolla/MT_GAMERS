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
let count = 0;
let imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];

function change_image(){
    let index = count % imgArr.length;
    document.querySelector(".cngImg").src=imgArr[index];
    count++;
}
setInterval(change_image, 2000);

// Write the code for video section
let container = document.getElementById('container')
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide').length;
let buttons = document.getElementsByClassName('arrow');


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
        buttons[0].style.display="block";
    }
    if (currentPosition < slidesCount) {
        buttons[1].style.display="block";
    }
    if (currentPosition >= slidesCount) {
        buttons[1].style.display="none";
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
        buttons[0].style.display="none";
    }
    if (currentPosition < slidesCount) {
        buttons[1].style.display="block";
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].style.display="none";
    }
    if (currentPosition > 0) {
        buttons[0].style.display="block";
    }
};

function click(){
    document.querySelector(".home").click();
}

click();
