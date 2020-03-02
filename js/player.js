class Player{
    constructor(){
        this.position = [1,9];
        this.size = 100;
        this.height = 30;
        this.width = 10;
    }

    jump(){
        this.position[1] -= 3;
    }
}

