window.addEventListener("load", () => {
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors = [
    "limegreen",
    "magenta",
    "Red",
    "black",
    "chocolate",
    "rgb(3, 236, 236)",
    "darkolivegreen",
    "yellow",
];


//Lets get going with the  sound here
pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
creatBubbles(index);
    });
});


const creatBubbles = index => {
    //Creat bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
    });
};
});