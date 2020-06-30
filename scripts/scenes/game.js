class Game {
    constructor() {
        this.enemyIndex = 0;
    }

    setup() {
        sceneSky = new Scenario(imageSceneSky, 1);
        sceneMountains = new Scenario(imageSceneMountains, 3);
        sceneTrees = new Scenario(imageSceneTrees, 5);
        scenePath = new Scenario(imageScenePath, 0);

        character = new Character(
            matrixCharacter,
            imageCharacter,
            0,
            7,
            40,
            60,
            40,
            60,
            soundJump
        );

        coin = new Coin(
            matrixCoin,
            imageCoin,
            width + 40,
            7,
            20,
            20,
            40,
            40,
            soundCoin
        );

        floatingMine = new Enemy(
            matrixFloatingMine,
            imageFloatingMine,
            width + 40,
            7,
            40,
            40,
            40,
            40,
            80,
            0,
            soundExplosion,
            soundEletric
        );
        missile = new Enemy(
            matrixMissile,
            imageMissile,
            width + 40,
            120,
            40,
            10,
            40,
            10,
            80,
            0,
            soundExplosion,
            soundMissile
        );

        enemies.push(floatingMine);
        enemies.push(missile);
    }

    draw() {
        this.moveScene();

        scoreBoard.show();
        lifeManager.draw();

        if (!character.isInvincible()) {
            character.show();
        }

        character.applyGravity();

        if (coin.isTouched(character)) {
            coin.new();
            scoreBoard.scoreUp(10);
        } else {
            coin.show();
            coin.move();
        }

        const enemy = enemies[this.enemyIndex];

        enemy.show();
        enemy.move();

        if (enemy.isVisible()) {
            this.enemyIndex = Math.floor(random(0, enemies.length));
            enemy.setSpeed(random(7, 15));
            enemy.mutableY = random(0, 160);
        }

        if (character.isCollided(enemy)) {
            character.becomeInvincible();
            lifeManager.lose();
            enemy.initialSound.stop();
            enemy.explosion();
            enemy.x = width + enemy.characterWidth;
            if (lifeManager.isDead()) {
                this.gameOver();
            }
        }
    }

    moveScene() {
        sceneSky.show();
        sceneSky.move();
        sceneMountains.show();
        sceneMountains.move();
        sceneTrees.show();
        sceneTrees.move();
        scenePath.show();
        scenePath.move();
    }

    isArrowUpPressed(key) {
        if (key === 'ArrowUp' && !gameOver) {
            character.jump();
        }
    }

    start() {
        gameOver = false;
        scoreBoard = new ScoreBoard();
        lifeManager = new LifeManager(3, 3);

        soundGameOver.stop();
        soundtrack.stop();
        soundtrack.loop();

        loop();
    }

    gameOver() {
        image(imageGameOver, width/2 - 200, height/3);
        soundtrack.stop();
        soundGameOver.stop();
        soundGameOver.loop();
        gameOver = true;
        noLoop();

        managerButton = new ManagerButton('Restart', width / 2, height / 7 * 5);
        managerButton.draw();
    }
}