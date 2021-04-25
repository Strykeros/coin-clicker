class Generator{

    constructor(){
        this.coins = [];
    }

    generate(){
        let value = Math.floor(Math.random() * 3 ) + 1;

        let coin = new Coin(value);
        this.coins.push(coin);

        let maxX = CANVAS_WIDTH - coin.size / 2;
        let min = coin.size / 2;
        let maxY = CANVAS_HEIGHT - coin.size / 2;
        coin.x = Math.floor( Math.random() * (1 + maxX - min) ) + min;
        coin.y = Math.floor( Math.random() * (1 + maxY - min) ) + min;

        const self = this;
        setTimeout(function () {
            self.expireCoin(coin);
        }, 2000);
    }

    drawCoins(context){
        for(let i = 0; i < this.coins.length; i++){
            this.coins[i].draw(context);
        }
    }

    expireCoin(coin){
        const index = this.coins.indexOf(coin);

        if(index > -1){
            this.coins.splice(index, 1);
        }
    }

}