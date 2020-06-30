class Character extends AnimatedObject{
    constructor(
        matrix,
        image,
        x,
        mutableY,
        characterWidth,
        characterHeight,
        spriteWidth,
        spriteHeight,
        soundJump
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
        this.mutableY = mutableY;
        this.initialY = height - characterHeight - mutableY;
        this.y = this.initialY;
        this.jumpSpeed = 0
        this.jumpHeight = -20
        this.gravity = 2;
        this.maxJumpsInSequence = 2;
        this.jumps = 0;
        this.soundJump = soundJump;
        this.invincible = false;

        this.tempMatrix = [];
        this.tempFrame = 0;
    }

    jump() {
        if (this.jumps < this.maxJumpsInSequence) {
            this.jumpSpeed = this.jumpHeight;
            this.jumps++;
            this.soundJump.play();
        }
    }

    applyGravity() {
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;

        if (this.y > this.initialY) {
            this.y = this.initialY;
            this.jumps = 0;
        }
    }

    becomeInvincible() {
        this.invincible = true;
        setTimeout(() => {
            this.invincible = false;
        }, 400);
    }

    isInvincible() {
        return this.invincible;
    }

    isCollided(enemy) {
        if (this.isInvincible()) {
            return false;
        }

        const precision = .4;

        // Debug rectangles
        // noFill();
        // rect(this.x + 12, this.y + 12, this.characterWidth * precision, this.characterHeight - 10);
        // rect(enemy.x + 10, enemy.y, enemy.characterWidth, enemy.characterHeight);

        return collideRectRect(
            this.x + 12,                        // Rectangle 1 x position
            this.y + 12,                        // Rectangle 1 y position
            this.characterWidth * precision,    // Rectangle 1 width
            this.characterHeight - 10,          // Rectangle 1 height
            enemy.x + 10,                       // Rectangle 2 x position
            enemy.y,                            // Rectangle 2 y position
            enemy.characterWidth,               // Rectangle 2 width
            enemy.characterHeight               // Rectangle 2 height
        );
    }
}