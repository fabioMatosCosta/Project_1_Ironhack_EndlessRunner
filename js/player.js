class Player{
    constructor(){
        this.position = [2,9];
        this.size = 100;
        this.height = 2;
        this.width = 1;
    }

    jump(){
        this.position[1] -= 3;
    }
}

