class Game{
    constructor(){
        this.player = new Player;
        this.currentPoints = 0;
        this.pointsId = 0;
        this.gravity = 0.4;
        this.obstacle = new Obstacle;
    }


    points() {
        this.pointsId = setInterval(this.increment, 1000);
    };

    increment(){
        this.currentPoints++;
    }


    isCollide($player, $obstacle) {
        debugger
        var a = {
            y: 100 - $player.offsetTop - $player.height, 
            x: $player.offsetLeft,
            height: $player.height,
            width: $player.width
        }
        var b = {
            y: 100 - $obstacle.offsetTop - $obstacle.height, 
            x: $obstacle.offsetLeft,
            height: $obstacle.height,
            width: $obstacle.width
        }
        return !(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height)) ||
            ((a.x + a.width) < b.x) ||
            (a.x > (b.x + b.width))
        );
    }




    gameOver(){
        clearInterval(this.pointsId);
        console.log(this.currentPoints);
        this.currentPoints = 0 ;
    }
}


let game = new Game;