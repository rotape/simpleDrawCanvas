import 'normalize.css';
import './styles/style.less';

class DrawCanvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
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
        this.canvas.onmouseup = ()=>{
            this.isMouseCLicked = false;
        };
        this.canvas.onmousemove = (e) => {
            if (this.isMouseCLicked) {
                this.updateCurrentPosition(e);
                this.draw()
            }
        }
    }

    updateCurrentPosition(e) {
        this.prevPosition = this.currentPosition;
        this.currentPosition = {x: e.layerX, y: e.layerY};
    }

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.prevPosition.x, this.prevPosition.y);
        this.context.lineTo(this.currentPosition.x, this.currentPosition.y);
        this.context.stroke();
    }
}

 new DrawCanvas();
