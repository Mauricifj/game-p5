class ScoreBoard {
    constructor() {
        this.score = 0;
    }

    show() {
        textAlign(RIGHT);
        fill('#000000');
        textSize(50);
        text(parseInt(this.score), width - 30, 50);
    }

    scoreUp(points) {
        this.score += points;
    }
}