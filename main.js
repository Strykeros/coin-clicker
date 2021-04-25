const canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
canvas.createElement();
let app = document.querySelector(".app");
const generator = new Generator(); 
const coinClass = new Coin();
const scoreboard = new Scoreboard();




setInterval(function() {
    generator.generate();
    canvas.clear();
    generator.drawCoins(canvas.context);
    scoreboard.draw(canvas.context);
}, 250);

app.addEventListener( "click", function(event) {

    let clickX = event.x - event.target.getBoundingClientRect().left;
    let clickY = event.y - event.target.getBoundingClientRect().top;
    /*console.log(clickX);
    console.log(clickY);*/

    for(let i = 0; i < generator.coins.length; i++){
        const coin = generator.coins[i];       
        if(clickX >= coin.x - coin.size / 2 && clickX <= coin.x + coin.size / 2 &&
            clickY >= coin.y - coin.size / 2 && clickY <= coin.y + coin.size / 2){
            scoreboard.score += coin.value;
            generator.expireCoin(coin);
        }

    }
})
