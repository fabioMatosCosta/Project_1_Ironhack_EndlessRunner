let $gameboard = document.querySelector(".game-board-container");
let $body = document.querySelector("body");
let $bodyHeight = $body.offsetHeight;
let $bodyWidth = $body.offsetWidth;
let player = game.player;
let obstacle = game.obstacle;
let $backgroundWrapper = document.querySelector(".wrapper");

function playerPosition(){
    let positionArr = [];
    let playerPositionY = (($bodyHeight*player.position[1]/10) - player.size);
    positionArr.unshift(playerPositionY);
    let playerPositionX = (($bodyWidth*player.position[0]/10) - player.size);
    positionArr.unshift(playerPositionX);
    return positionArr;
}

function gravityCheck(){
    if (player.position[1] <= 9){
        player.position[1] += game.gravity;
    }
}

function renderPlayer() {
    
    let $playerImg = document.createElement("img");
    $playerImg.setAttribute("src", "./images/pug_run_nb.gif");
    $playerImg.setAttribute("id", "player");
    $playerImg.style.position = `relative`;
    $playerImg.style.height = `${player.size}px`;
    $playerImg.style.width = `${player.size - 20}px`;
    $playerImg.style.top = `${playerPosition()[1]}px`;
    $playerImg.style.left = `${playerPosition()[0]}px`;
    $gameboard.appendChild($playerImg);
    
}

function obstaclePosition(i){
    let positionArr = [];
    let obstaclePositionY = (($bodyHeight*obstacle[i].position[1]/10) - obstacle[i].size);
    positionArr.unshift(obstaclePositionY);
    let obstaclePositionX = (($bodyWidth*obstacle[i].position[0]/10) + obstacle[i].size);
    positionArr.unshift(obstaclePositionX);
    if (positionArr[0] > - $bodyWidth){
        obstacle[i].move();
    }
    return positionArr;
}


function renderObstacle(){

    for( let i = 0; i < obstacle.length; i++){
            let $obstacleImg = document.createElement("img");
            $obstacleImg.setAttribute("src", "./images/cat_sleep_nb.gif");~
            $obstacleImg.setAttribute("id", "obstacle");
            $obstacleImg.style.position = `relative`;
            $obstacleImg.style.height = `${obstacle[i].size}px`;
            $obstacleImg.style.width = `${obstacle[i].size - 20}px`;
            $obstacleImg.style.top = `${obstaclePosition(i)[1]}px`
            $obstacleImg.style.left = `${obstaclePosition(i)[0]}px`;
            $gameboard.appendChild($obstacleImg);
    }
}


function clearScreen(){
    $gameboard.innerHTML = "";
}

function renderBackground(){
    $slidingBackground = document.createElement("div");
    $slidingBackground.setAttribute("class", "sliding-bg");
    $backgroundWrapper.appendChild($slidingBackground);
}

function renderScore(){
    let currentScore = game.currentPoints;
    let $score = document.createElement("p");
    $score.setAttribute("id", "score");
    $score.innerHTML = `Score: ${currentScore}`;
    $score.style.zIndex = "1";
    $gameboard.appendChild($score);
}

function difLevel(){
    if (game.currentPoints>10){
        for(let i = 0; i<game.obstacle.length; i++){
            game.obstacle[i].velocity += 0.03;
        }
    } else if(game.currentPoints>20){
        for(let i = 0; i<game.obstacle.length; i++){
            game.obstacle[i].velocity += 0.04;
        }
    } else if(game.currentPoints>30){
        for(let i = 0; i<game.obstacle.length; i++){
            game.obstacle[i].velocity += 0.04;
        }
    } else if(game.currentPoints>40){
        for(let i = 0; i<game.obstacle.length; i++){
            game.obstacle[i].velocity += 0.06;
        }
    }  else if(game.currentPoints>50){
        for(let i = 0; i<game.obstacle.length; i++){
            game.obstacle[i].velocity += 0.8;
        }
    }else if(game.currentPoints>30){
        for(let i = 0; i<game.obstacle.length; i++){
            game.obstacle[i].velocity += 0.9;
        }
    }
}

function renderEverything(){
    clearScreen();
    renderScore();
    renderPlayer();
    renderObstacle();
    gravityCheck();
    difLevel();

    let $player = document.querySelector("#player");
    let $obstacle = document.querySelectorAll("#obstacle");
    for (let i = 0; i < $obstacle.length; i++){
        if (game.isCollide($player, $obstacle[i])){
            game.gameOver();
        }
    }
}
