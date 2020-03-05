class Player{
    constructor(){
        this.position = [2, 9];
        this.size = 100;
        this.height = 2;
        this.width = 1;
    }

    jump(){
        this.position[1] -= 3;
        if (Math.random()> 0.6){
            document.querySelector("#woof-sound").play();
        }
    }
}

