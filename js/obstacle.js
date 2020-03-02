class Obstacle{
    constructor(){
        this.position = [11, 8];
        this.velocity = 0.25;
        this.size = 50;
        this.height = 20;
        this.width = 10;
    }

    move(){
        this.position[0] -= this.velocity; 
    }
}