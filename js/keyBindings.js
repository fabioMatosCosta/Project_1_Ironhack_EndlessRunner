document.addEventListener("keydown", function(event){
    if (event.code === "Space") {
        if (player.position[1] > 9 && player.position[1] < 9.6 ) {
            player.jump();
        } 
    }
});