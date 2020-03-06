document.addEventListener("keydown", function(event){
    if (event.code === "Space") {
        if (player.position[1] > 9 && player.position[1] < 9.6 ) {
            player.jump();
        } 
    }
});

document.addEventListener("click", function(){
    
        if (player.position[1] > 9 && player.position[1] < 9.6 ) {
            player.jump();
        } 
});


let $startButton = document.querySelector(".start-button");

$startButton.addEventListener("click", function(){
    game.start();
    document.querySelector("#woof-sound").play();
});

