
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
            const $playerRect = $player.getBoundingClientRect();
            const $obstacleRect = $obstacle.getBoundingClientRect();
            return !(
                $playerRect.top + $playerRect.height < $obstacleRect.top ||
                $playerRect.top > $obstacleRect.top + $obstacleRect.height ||
                $playerRect.left + $playerRect.width < $obstacleRect.left ||
                $playerRect.left > $obstacleRect.left + $obstacleRect.width
            );
    }




    gameOver(){
        clearInterval(this.pointsId);
        console.log(this.currentPoints);
        this.currentPoints = 0 ;
    }
}


let game = new Game;