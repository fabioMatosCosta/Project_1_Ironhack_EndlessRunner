let $gameboard = document.querySelector(".game-board-container");
let $body = document.querySelector("body");
let $bodyHeight = $body.offsetHeight;
let $bodyWidth = $body.offsetWidth;
let player = game.player;
let obstacle = game.obstacle;


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

function obstaclePosition(){
    let positionArr = [];
    let obstaclePositionY = (($bodyHeight*obstacle.position[1]/10) - obstacle.size);
    positionArr.unshift(obstaclePositionY);
    let obstaclePositionX = (($bodyWidth*obstacle.position[0]/10) + obstacle.size);
    positionArr.unshift(obstaclePositionX);
    if (positionArr[0] > - $bodyWidth){
        obstacle.move();
    }
    return positionArr;
}


function renderObstacle(){
    
    let $obstacleImg = document.createElement("img");
    $obstacleImg.setAttribute("src", "./images/cat_sleep_nb.gif");~
    $obstacleImg.setAttribute("id", "obstacle");
    $obstacleImg.style.position = `relative`;
    $obstacleImg.style.height = `${obstacle.size}px`;
    $obstacleImg.style.width = `${obstacle.size - 20}px`;
    $obstacleImg.style.top = `${obstaclePosition()[1]}px`
    $obstacleImg.style.left = `${obstaclePosition()[0]}px`;
    $gameboard.appendChild($obstacleImg);
}


function clearScreen(){
    $gameboard.innerHTML = "";
}

function renderBackground(){
    $gameboard.style.backgroundImage = "url('./images/background2.gif')";
}

function renderEverything(){
    clearScreen();
    renderBackground();
    renderPlayer();
    renderObstacle();
    gravityCheck();
    let $player = document.querySelector("#player");
    let $obstacle = document.querySelector("#obstacle");
    if (game.isCollide($player, $obstacle)){
        game.gameOver();
    }
}




