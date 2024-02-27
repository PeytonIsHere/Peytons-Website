const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load your custom images for the dinosaur and obstacles
const dinosaurImage = new Image();
dinosaurImage.src = 'eric.png'; // Path to your dinosaur image
const obstacleImage = new Image();
obstacleImage.src = 'eric.png'; // Path to your obstacle image

const dinosaur = {
    x: 50,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    velocityY: 0,
    jumping: false
};

const obstacles = [];

let gameSpeed = 3;
let gravity = 1;

function jump() {
    if (!dinosaur.jumping) {
        dinosaur.velocityY = -20;
        dinosaur.jumping = true;
    }
}

document.addEventListener('keydown', jump);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dinosaur
    ctx.drawImage(dinosaurImage, dinosaur.x, dinosaur.y, dinosaur.width, dinosaur.height);

    // Update dinosaur position
    if (dinosaur.y + dinosaur.height < canvas.height) {
        dinosaur.velocityY += gravity;
        dinosaur.y += dinosaur.velocityY;
    } else {
        dinosaur.y = canvas.height - dinosaur.height;
        dinosaur.jumping = false;
    }

    // Generate obstacles
    if (Math.random() < 0.02) {
        obstacles.push({
            x: canvas.width,
            y: canvas.height - 50,
            width: 50,
            height: 50
        });
    }

    // Draw obstacles
    for (let obstacle of obstacles) {
        ctx.drawImage(obstacleImage, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.x -= gameSpeed;

        // Collision detection
        if (
            dinosaur.x < obstacle.x + obstacle.width &&
            dinosaur.x + dinosaur.width > obstacle.x &&
            dinosaur.y < obstacle.y + obstacle.height &&
            dinosaur.y + dinosaur.height > obstacle.y
        ) {
            // Game over
            alert('Game Over!');
            location.reload(); // Reload the page to restart the game
        }
    }

    // Remove obstacles that are out of the screen
    if (obstacles.length > 0 && obstacles[0].x + obstacles[0].width < 0) {
        obstacles.shift();
    }

    requestAnimationFrame(draw);
}

draw();
