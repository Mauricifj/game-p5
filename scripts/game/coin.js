class Coin extends AnimatedObject{
    constructor(
        matrix,
        image,
        x,
        mutableY,
        characterWidth,
        characterHeight,
        spriteWidth,
        spriteHeight,
        soundCoin
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

        this.soundCoin = soundCoin;
        this.mutableY = mutableY;
        this.speed = 10;
    }

    move() {
        this.x -= this.speed;
        // this.y = height - this.characterHeight - this.mutableY;

        if (this.x < -this.characterWidth) {
            this.new();
        }
    }

    isTouched(character) {
        const precision = .4;
        let touched = false;

        // Debug rectangles
        // noFill();
        // rect(this.x, this.y, this.characterWidth, this.characterHeight);
        // rect(character.x + 12, character.y + 12, character.characterWidth * precision, character.characterHeight - 10);

        touched = collideRectRect(
            this.x,                                 // Rectangle 1 x position
            this.y,                                 // Rectangle 1 y position
            this.characterWidth,                    // Rectangle 1 width
            this.characterHeight - 10,              // Rectangle 1 height
            character.x + 12,                       // Rectangle 2 x position
            character.y + 12,                       // Rectangle 2 y position
            character.characterWidth * precision,   // Rectangle 2 width
            character.characterHeight -10           // Rectangle 2 height
        );

        if (touched) {
            this.soundCoin.play();
        }

        return touched;
    }

    new() {
        this.x = width + this.characterWidth;
        this.y = height - this.characterHeight - random(0, 160);
    }
}