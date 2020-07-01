class InitialScene {
    constructor() {}

    setup() {
        this._sound();
    }

    draw() {
        this._background();
        this._text();
        this._startButton();
    }

    _background() {
        image(imageInitialBackground, 0, 0)
    }

    _text() {
        fill(0);
        strokeWeight(2);
        stroke(245, 0.7);
        textAlign(CENTER);
        textSize(50);
        textFont('Indie Flower')
        text("The Adventures of", width / 2, height / 3);
        textSize(100);
        text("PeeFivenson", width / 2, height / 5 * 3);
        textFont('Indie Flower');
        textSize(30)
        textAlign(LEFT);
        text("* Click or touch to jump", 20, height - 30);
    }

    _startButton() {
        managerButton.y = height / 7 * 5;
        managerButton.draw();
    }

    _sound() {
        soundInitial.loop();
    }
}