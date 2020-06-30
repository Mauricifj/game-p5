function setup() {
    createCanvas(640, 480);
    frameRate(40);

    game = new Game();
    game.setup();

    initial = new InitialScene();
    initial.setup();

    scenes = {game, initial};

    managerButton = new ManagerButton('Start', width /2, height / 2);
}

function keyPressed() {
    game.isArrowUpPressed(key);
}

function draw() {
    scenes[actualScene].draw();
}
