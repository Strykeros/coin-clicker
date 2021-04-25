class Coin{
    constructor(value){
        this.value = value;
        this.size = 50;
        this.size2 = 45;
        this.x = 0;
        this.y = 0;
        this.color = [];
        this.setColor();
    }

    draw(context){
        // context parameter is equal to canvas.getContext("2d");
        context.beginPath();
        context.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = this.color[0];
        context.fill();

        context.beginPath();
        context.fillStyle = this.color[1];
        context.arc(this.x, this.y, this.size2 / 2.3, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
    }

    setColor(){
        if(this.value == 1){
            this.color = ["#663300", "#993300"];
        }
        else if(this.value == 2){
            this.color = ["#888888", "#AAAAAA"];
        }
        else{
            this.color = ["#FFCC00", "#FFF000"];
        }
    }
    
}