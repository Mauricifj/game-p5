function setup() {
    createCanvas(640, 480);
    frameRate(40);

    game = new Game();
    game.setup();

    initial = new InitialScene();
    initial.setup();

    scenes = {game, initial};

    managerButton = new ManagerButton('Start', width / 7 * 5, height / 7 * 5);
}

function keyPressed() {
    game.isArrowUpPressed(key);
}

function draw() {
    scenes[actualScene].draw();
}
