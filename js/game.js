
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
        document.querySelector("#main").loop = true;
        document.querySelector("#main").play();
        this.points();

        this.newInt = setInterval(() => {
            renderEverything();
        }, 100);

        renderBackground();
        this.obsInt = setInterval(()=> {
            this.obstacle.push(new Obstacle);
        }, 2000)

        this.obstDelInt = setInterval(()=> {
            if( this.obstacle.length > 2){
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
        let $poop = document.createElement("img");
        let $score = document.querySelector("#score");
        $poop.setAttribute("src","./images/poop.gif");
        $poop.setAttribute("id","poop");
        $restartButton.setAttribute("id", "restart-btn");
        $restartButton.innerHTML = "Try Again";
        $points.innerHTML = `Your score: ${this.currentPoints} barks`
        $gameOver.innerHTML = "You  stink!";
        $popDiv.style.width = `100%`;
        $popDiv.style.height = `100%`;
        $popDiv.setAttribute("id", "popup");
        document.querySelector("#main").pause();
        $gameboard.removeChild($score);
        $body.appendChild($popDiv);
        $body.appendChild($poop);
        $body.appendChild($gameOver);
        $body.appendChild($points);
        $body.appendChild($restartButton);
        clearInterval(this.pointsId);
        clearInterval(this.newInt);
        clearInterval(this.obsInt);
        clearInterval(this.obstDelInt);
        clearInterval(this.difficultyInt);
        let $restartBtn = document.querySelector("#restart-btn");
        $restartBtn.addEventListener("click", ()=>{
            $body.removeChild($gameOver);
            $body.removeChild($points);
            $body.removeChild($restartButton);
            $body.removeChild($poop);
            $body.removeChild($popDiv);
            this.currentPoints = 0;
            this.start();
            document.querySelector("#woof-sound").play();
        });
    }
}


let game = new Game;