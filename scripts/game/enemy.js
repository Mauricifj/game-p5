class Enemy extends AnimatedObject {
    constructor(
        matrix,
        image,
        x,
        mutableY,
        characterWidth,
        characterHeight,
        spriteWidth,
        spriteHeight,
        explosionX,
        explosionY,
        soundExplosion,
        initialSound
    ) {
        super(
            matrix,
            image,
            x,
            mutableY,
            characterWidth,
            characterHeight,
            spriteWidth,
            spriteHeight
        );
        this.explosionX = explosionX;
        this.explosionY = explosionY;
        this.soundExplosion = soundExplosion;
        this.initialSound = initialSound;
        this.speed = 10;
    }
    move() {
        if (this.x === width + this.characterWidth) {
            this.initialSound.stop();
            this.initialSound.volume(0.3);
            this.initialSound.play();
        }

        this.x -= this.speed;

        if (this.x + this.speed < -this.characterWidth) {
            this.x = width;
            this.initialSound.stop();
            this.initialSound.play();
        }
    }

    explosion () {
        image(
            this.image,
            this.x,
            this.y,
            this.characterWidth,
            this.characterHeight,
            this.explosionX,
            this.explosionY,
            this.spriteWidth,
            this.spriteHeight
        );
        this.soundExplosion.play();
    }

    isVisible () {
        return this.x < -this.characterWidth;
    }

    setSpeed(speed) {
        this.speed = speed
    }
}