function preload() {
    imageInitialBackground = loadImage('images/background-initial.png');
    imageSceneSky = loadImage('images/sky.png');
    imageSceneMountains = loadImage('images/mountains.png');
    imageSceneTrees = loadImage('images/trees.png');
    imageScenePath = loadImage('images/path.png');

    soundInitial = loadSound('sounds/initial.mp3');
    soundtrack = loadSound('sounds/soundtrack.mp3');
    soundJump = loadSound('sounds/jump.mp3');
    soundExplosion = loadSound('sounds/explosion.mp3');
    soundCoin = loadSound('sounds/coin.ogg');
    soundMissile = createAudio('sounds/missile.mp3');
    soundEletric = createAudio('sounds/electric.mp3');
    soundGameOver = loadSound('sounds/game-over.mp3');

    imageCharacter = loadImage('images/character.png');
    imageCoin = loadImage('images/coin.png');
    imageLife = loadImage('images/life.png');
    imageFloatingMine = loadImage('images/floating-mine.png');
    imageMissile = loadImage('images/missile.png');

    imageGameOver = loadImage('images/game-over.png');
}