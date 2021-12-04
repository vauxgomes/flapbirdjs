var bar = document.querySelector("#bar");
var hole = document.querySelector("#hole");
var bird = document.querySelector("#bird");

const gravity = 3;
const jump = 5;
const reload = 15;

var isJumping = false;

// Random hole position
hole.addEventListener("animationiteration", () => {
    // Something between [150, 450]
    // var random = Math.random() * 300 + 150;
    // hole.style.top = "-" + random + "px";
});

// Gravity & End gamming detection
var gravityAction = setInterval(() => {
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    // If not jumping then gravity acts
    if (!isJumping) {
        bird.style.top = birdTop + gravity + "px";
    }

    var holeLeft = parseInt(window.getComputedStyle(hole).getPropertyValue('left'))
    var holeTop = 500 + parseInt(window.getComputedStyle(hole).getPropertyValue('top'))
    var holeBottom = holeTop+150;

    if (birdTop >= 475  || ((holeLeft <= 25 && holeLeft > 0) && (birdTop < holeTop || birdTop + 50 >= holeBottom))) {
        // clearInterval(gravityAction);
        console.log('touch')
    } else {
        console.log('ok')
    }
}, reload);

// Jump
document.querySelector("html").addEventListener("click", () => {
    isJumping = true; // Set state

    var jumps = 0;
    var jumpAction = setInterval(() => {
        var top = parseInt(
            window.getComputedStyle(bird).getPropertyValue("top")
        );

        if (top > 6 && jumps < 15) {
            bird.style.top = top - jump + "px";
        }

        if (jumps >= 20) {
            clearInterval(jumpAction);
            isJumping = false;
        }

        jumps++;
    }, reload);
});
