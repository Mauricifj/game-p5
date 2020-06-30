let scenes;
let game;
let initial;
let actualScene = 'initial';
let managerButton;

let imageInitialBackground;
let imageSceneSky;
let imageSceneMountains;
let imageSceneTrees;
let imageScenePath;
let imageCharacter;
let imageCoin;
let imageLife;
let imageFloatingMine;
let imageMissile;
let imageGameOver;

let scoreBoard;
let lifeManager;
let gameOver = false;

let sceneSky;
let sceneMountains;
let sceneTrees;
let scenePath;

let soundInitial;
let soundtrack;
let soundJump
let soundExplosion;
let soundCoin;
let soundMissile;
let soundEletric;
let soundGameOver;

let character;
let coin;
let floatingMine;
let missile;


const matrixCharacter = [
    [ 0, 0],
    [ 0, 0],
    [ 0, 0],
    [ 0, 0],
    [ 0, 0],
    [40, 0],
    [40, 0],
    [40, 0],
    [40, 0],
    [40, 0],
];

const matrixCoin = [
    [ 0, 0],
    [ 0, 0],
    [ 0, 0],
    [40, 0],
    [40, 0],
    [40, 0],
];

const matrixFloatingMine = [
    [ 0, 0],
    [ 0, 0],
    [40, 0],
    [40, 0],
];

const matrixMissile = [
    [ 0, 0],
    [ 0, 0],
    [ 0, 0],
    [40, 0],
    [40, 0],
    [40, 0],
];

const enemies = [];