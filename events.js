// stored html elements
let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");
let forwardButton = document.querySelector(".forward");
let backwardButton = document.querySelector(".backward");
let x=0;

// 1. When jump button is clicked, Mario jumps and coin disappears.  

jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    mario.style.transition = "bottom .3s";
    coin.style.display = "none";
});


// 2. When jump down button is clicked, Mario jumps down. 

jumpDownButton.addEventListener("click", function() {
    mario.style.transition = "bottom .3s";
    mario.style.bottom = "35px";
});


forwardButton.addEventListener("click", function() {
    x+=1;
    mario.style.transition = "left .3s";
    coin.style.transition = "left .3s";
    mario.style.left= "calc(".concat((getComputedStyle(mario)).left," + 120px - 35px)");
    coin.style.left = "calc(".concat((getComputedStyle(coin)).left," + 120px - 35px)");
});

backwardButton.addEventListener("click", function() {
    x-=1;
    mario.style.transition = "left .3s";
    coin.style.transition = "left .3s";
    mario.style.left= "calc(".concat((getComputedStyle(mario)).left," - 120px + 35px)");
    coin.style.left = "calc(".concat((getComputedStyle(coin)).left," - 120px + 35px)");
});

// 3. When change color button is clicked, background color changes. 

changeColorButton.addEventListener("click", function() {
    background.style.backgroundColor = "springGreen"; // you can change the color to something different
});



// 4. When end game button is clicked, the title of the page says game over. 

endGameButton.addEventListener("click", function() {
    title.innerHTML = 'Game ${x} over.';
});



// 5. When update score button is clicked, the counter score becomes "1" instead of 0. 

updateScoreButton.addEventListener("click", function() {
    score.innerHTML = 1;
});



// 6: When clicking the "Grow" button the Mario image gets bigger. Write the whole click handler! 
growButton.addEventListener("click", function(){
    mario.style.width = "150px";
    mario.style.height = "150px";
    mario.style.transition = "height width .3s";
});

