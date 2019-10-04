import 'normalize.css';
import './styles/style.less';

class DrawCanvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = '1024';
        this.canvas.height = '1024';
        this.context = this.canvas.getContext('2d');
        this.prevPosition = {x: 0, y: 0};
        this.currentPosition = {x: 0, y: 0};
        this.init();
    }

    init() {
        this.canvas.onmousedown = (e) => {
            this.isMouseCLicked = true;
            this.updateCurrentPosition(e);
        };
        this.canvas.onmouseup = () => {
            this.isMouseCLicked = false;
        };
        this.canvas.onmousemove = (e) => {
            if (this.isMouseCLicked) {
                this.updateCurrentPosition(e);
                this.draw()
            }
        };
        document.getElementById('clear').addEventListener('click', () => {
            this.clear()
        });
    }

    updateCurrentPosition(e) {
        this.prevPosition = this.currentPosition;
        this.currentPosition = {x: e.layerX, y: e.layerY};
    }

    draw() {
        this.color = document.querySelector('input[name=color]:checked').value;
        this.lineWidth = document.querySelector('input[name=lineWidth]:checked').value;
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.lineWidth;
        this.context.beginPath();
        this.context.moveTo(this.prevPosition.x, this.prevPosition.y);
        this.context.lineTo(this.currentPosition.x, this.currentPosition.y);
        this.context.stroke();
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    chooseStrokeWidth(value) {
        this.context.lineWidth(value);
    }
}

new DrawCanvas();
