let $gameboard = document.querySelector(".game-board-container");
let $body = document.querySelector("body");
let $gameboardHeight = $body.offsetHeight;
let $gameboardWidth = $body.offsetWidth;
let player = game.player;
let obstacle = game.obstacle;


function playerPosition(){
    let positionArr = [];
    let playerPositionY = (($gameboardHeight*player.position[1]/10)-player.size);
    positionArr.unshift(playerPositionY);
    let playerPositionX = (($gameboardWidth*player.position[0]/10)-player.size);
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
    $playerImg.setAttribute("src", "./images/__Zombie01_Idle_000.png")
    $playerImg.style.position = `relative`;
    $playerImg.style.height = `${player.size}px`;
    $playerImg.style.width = `${player.size}px`;
    $playerImg.style.top = `${playerPosition()[1]}px`;
    $playerImg.style.left = `${playerPosition()[0]}px`;
    $gameboard.appendChild($playerImg);
    
}

function obstaclePosition(){
    let positionArr = [];
    let obstaclePositionY = (($gameboardHeight*obstacle.position[1]/10) - obstacle.size);
    positionArr.unshift(obstaclePositionY);
    let obstaclePositionX = (($gameboardWidth*obstacle.position[0]/10) - obstacle.size);
    positionArr.unshift(obstaclePositionX);
    if (positionArr[0]){
        obstacle.move();
    }
    return positionArr;
}


function renderObstacle(){
    
    let $obstacleImg = document.createElement("img");
    $obstacleImg.setAttribute("src", "./images/Rock_Pile.png")
    $obstacleImg.style.position = `relative`;
    $obstacleImg.style.height = `${obstacle.size}px`;
    $obstacleImg.style.width = `${obstacle.size}px`;
    $obstacleImg.style.top = `${obstaclePosition()[1]}px`
    $obstacleImg.style.left = `${obstaclePosition()[0]}px`;
    $gameboard.appendChild($obstacleImg);
}


function clearScreen(){
    $gameboard.innerHTML = "";
}

function renderEverything(){
    clearScreen();
    renderPlayer();
    renderObstacle();
    gravityCheck();
    if (game.isCollide(player, obstacle)){
        alert("you lose");
    }
}


let newint = setInterval(() => {
    renderEverything();
}, 100);


