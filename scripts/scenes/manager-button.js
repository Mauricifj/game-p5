class ManagerButton {
    constructor(buttonText, x, y) {
        this.text = buttonText;
        this.x = x;
        this.y = y;

        this.button = createButton(this.text);
    }

    draw() {
        this.button.position(this.x, this.y);
        this.button.addClass('start-button');
        this.button.mousePressed(() => this.changeScene());
    }

    changeScene() {
        this.button.remove();
        soundInitial.stop();
        actualScene = 'game';
        game.start();
    }
}