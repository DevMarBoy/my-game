var canvas = document.getElementById("canvas");
//grabs a 2d rendering context
var context = canvas.getContext("2d");

//canvas properties
var canvasWidth = 500;
var canvasHeight = 500;
var canvasBackgroundColor = "#CFF6FF";

//player properties
var playerX = 0;
var playerY = 0;
var playerSize = 25;
var playerColor = "red";
var playerSpeed = 3;

//testing gravity
var gravity = .5;
var velocity = 0;

//coin properties
var coinX = 0;
var coinY = 0;
var coinRadius = 25;

//center player
var centerPlayerX = (canvasWidth/2) - (playerSize/2);
var centerPlayerY = (canvasHeight/2) - (playerSize/2);

//get keyboard keys
var keys = [];

window.addEventListener("keydown", (e) => 
{
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e)
{
    keys[e.keyCode] = false;
})

window.addEventListener("keypress", function(e)
{
    if(e.keyCode === 32)
    {
        velocity -= 20;
    }
})

function init()
{
    //add center to the player positions
    playerX = centerPlayerX;
    playerY = centerPlayerY;
}
function gameLoop()
{
    update();
    render();
}
function update()
{
    
    velocity += gravity;
    playerY += velocity;
    
    if(playerY > canvasHeight)
    {
        playerY = 0 - playerSize;
    }

    if(keys[65] == true)
    {
        console.log("pressedKey");
        playerX = playerX - playerSpeed;
    }
    if(keys[87] == true)
    {
        playerY -= playerSpeed;
    }
    if(keys[83] == true)
    {
        playerY += playerSpeed;
    }
    if(keys[68] == true)
    {
        playerX += playerSpeed;
    }
    // if(keys[32] == true)
    // {
    //     playerY -= 15
    // }
}
function render()
{
    //clears canvas
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    //render/color background
    context.fillStyle = canvasBackgroundColor;
    context.fillRect(0,0, canvasWidth, canvasHeight);
    //render/color player
    context.fillStyle = playerColor;
    context.fillRect(playerX, playerY, playerSize, playerSize);

    //draw circle on screen
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(coinX + coinRadius/2, coinY + coinRadius /2, coinRadius/2, 0, 360);
    context.fill();

}
//gamLoop is called every 1000.60 miliseconds
window.setInterval(gameLoop, 1000/60);
init();