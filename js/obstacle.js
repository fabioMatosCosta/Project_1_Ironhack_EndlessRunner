class Obstacle{
    constructor(){
        this.position = [11, 8];
        this.velocity = 0.25;
        this.size = 50;
        this.height = 1;
        this.width = 1;
    }

    move(){
        this.position[0] -= this.velocity; 
    }
}