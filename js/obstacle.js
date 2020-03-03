class Obstacle{
    constructor(){
        this.position = [11, 9];
        this.velocity = 0.25;
        this.size = 80;
        this.height = 1;
        this.width = 1;
    }

    move(){
        this.position[0] -= this.velocity; 
    }
}