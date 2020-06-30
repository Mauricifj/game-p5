class LifeManager {
    constructor(max, initial) {
        this.max = max;
        this.initial = initial;
        this.lifes = this.initial;

        this.width = 25;
        this.height = 25;
        this.initialX = 20;
        this.y = 20;
    }

    draw() {
        for (let count = 0; count < this.lifes; count++) {
            const margin = count * 10;
            const position = this.initialX * (count + 1);

            image(imageLife, position + margin, this.y, this.width, this.height)
        }
    }

    isDead() {
        return this.lifes < 0;
    }

    add() {
        if (this.lifes <= this.max)
            this.lifes++;
    }

    lose() {
        this.lifes--;
    }
}