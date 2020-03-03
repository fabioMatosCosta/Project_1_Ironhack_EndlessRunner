
class Game{
    constructor(){
        this.player = new Player;
        this.currentPoints = 0;
        this.increment = this.increment.bind(this)
        this.pointsId = 0;
        this.gravity = 0.4;
        this.obstacle = new Obstacle;
        this.newInt = 0;
    }


    points() {
        this.pointsId = setInterval(this.increment, 500);
    };

    increment(){
        this.currentPoints++;
    }

    start(){
        this.points();
        this.newInt = setInterval(() => {
            renderEverything();
        }, 100);
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
        clearInterval(this.newInt);
        let $gameOver = document.createElement("h1");
        let $points = document.createElement("h2");
        let $restartButton = document.createElement("button");
        $restartButton.setAttribute("id", "restart-btn");
        $restartButton.innerHTML = "Try Again";
        $points.innerHTML = `Your score: ${this.currentPoints} barks`
        $gameOver.innerHTML = "Ohh , You suck !";
        $body.appendChild($gameOver);
        $body.appendChild($points);
        $body.appendChild($restartButton);
        clearInterval(this.pointsId);

    }
}


let game = new Game;