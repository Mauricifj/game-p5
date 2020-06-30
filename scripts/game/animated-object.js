class AnimatedObject {
    constructor(
        matrix,
        image,
        x,
        mutableY,
        characterWidth,
        characterHeight,
        spriteWidth,
        spriteHeight
    ) {
        this.matrix = matrix;
        this.image = image;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.x = x;
        this.mutableY = mutableY;
        this.y = height - this.characterHeight - this.mutableY;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.frame = 0;
    }

    show() {
        image(
            this.image,
            this.x,
            this.y,
            this.characterWidth,
            this.characterHeight,
            this.matrix[this.frame][0],
            this.matrix[this.frame][1],
            this.spriteWidth,
            this.spriteHeight
        );
        this.animate();
    }

    animate() {
        this.frame++;
        if (this.frame >= this.matrix.length - 1) {
            this.frame = 0;
        }
    }
}