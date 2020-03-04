
class Game{
    constructor(){
        this.player = new Player;
        this.currentPoints = 0;
        this.increment = this.increment.bind(this);
        this.start = this.start.bind(this);
        this.pointsId = 0;
        this.gravity = 0.4;
        this.obstacle = [new Obstacle];
        this.newInt = 0;
        this.obsInt = 0;
        this.obstDelInt = 0;
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

        this.obsInt = setInterval(()=> {
            this.obstacle.push(new Obstacle);
        }, 2000)

        this.obstDelInt = setInterval(()=> {
            if( this.obstacle.length > 2){
                let randomObstacle = Math.floor(Math.random() * this.obstacle.length);
                this.obstacle.splice(0, 1);
            }
        }, 3000)
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
        let $gameOver = document.createElement("h1");
        let $points = document.createElement("h2");
        let $restartButton = document.createElement("button");
        let $popDiv = document.createElement("div");
        $restartButton.setAttribute("id", "restart-btn");
        $restartButton.innerHTML = "Try Again";
        $points.innerHTML = `Your score: ${this.currentPoints} barks`
        $gameOver.innerHTML = "Oh, poop!";
        $popDiv.style.width = `100%`;
        $popDiv.style.height = `100%`;
        $popDiv.setAttribute("id", "popup");

        $body.appendChild($popDiv);
        
        $body.appendChild($gameOver);
        $body.appendChild($points);
        $body.appendChild($restartButton);
        clearInterval(this.pointsId);
        clearInterval(this.newInt);
        clearInterval(this.obsInt);
        clearInterval(this.obstDelInt);
        let $restartBtn = document.querySelector("#restart-btn");
        $restartBtn.addEventListener("click", ()=>{
            $body.removeChild($gameOver);
            $body.removeChild($points);
            $body.removeChild($restartButton);
            $body.removeChild($popDiv);
            this.start();
            document.querySelector("#woof-sound").play();
        });
    }
}


let game = new Game;