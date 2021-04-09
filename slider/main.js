// Get access to dom elements(arrows,slides and etc.)
let leftArrow = document.querySelector('.fa-chevron-left');
let rightArrow = document.querySelector('.fa-chevron-right');
let slide = document.querySelector('.slide');
let circles = document.querySelector('.slider-circle');

// Declare two variables for indexing slides
let i = 0
let j = 0;

// Left arrow turns slider to the left
leftArrow.addEventListener('click', function() {
    if(i === 0) { 
        // If slide's index is 0, then we won't turn slide anymore
        // the first slide will be shown and first circle will be active
        slide.children[i].style.opacity = 1;
        circles.children[j].className = 'fas fa-circle';
        i = 0;
        j = 0;
    }else {
        // If slide's index isn't 0, then we turn to another left slide
        // Activating appropriate circle in the bottom, after that decrementing slide's and circle's indexes
        circles.children[j].className = 'far fa-circle';
        circles.children[j - 1].className = 'fas fa-circle';
        slide.children[i].style.opacity = 0;
        slide.children[i-1].style.opacity = 1;
        i--;
        j--;
    }
});

// Right arrow turns slider to the right
rightArrow.addEventListener('click', function() {
    // If slide's index equals to the slider images quantity minus one, then we won't turn slide to the right anymore
    // the last slide will be shown and last circle will be active
    if(i === slide.children.length - 1) {
        slide.children[i].style.opacity = 1;
        i = slide.children.length - 1;
    }else {
        // If the circle's index equals to the circles quantity minus one, then we won't increment circle's index
        // otherwise we increment it by one
        if(j === circles.children.length - 1) {
            circles.children[j].className = 'fas fa-circle';
            j = circles.children.length - 1;
        }else {
            circles.children[j].className = 'far fa-circle';
            circles.children[j+1].className = 'fas fa-circle';
            j++;
        }

        // If slide isn't the last one, we turn the slide to the right
        slide.children[i].style.opacity = 0;
        slide.children[i+1].style.opacity = 1;
        i++;
    }
});