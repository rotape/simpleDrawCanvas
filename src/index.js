import 'normalize.css';
import './styles/style.less';

console.log('hello world');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let clickX = [];
let clickY = [];
let clickDrag = [];
let paint = false;

let addClick = (x, y, dragging) => {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    console.log('CLICKS', clickX);
};
let redraw = () => {
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 5;
    clickX.forEach((c, index) => {
            context.beginPath();
            if (clickDrag[index]) {
                console.log('drawing');
                context.moveTo(clickX[index-1], clickY[index-1]);
            }else{
                context.moveTo(clickX[index-1], clickY[index]);
            }
            context.lineTo(clickX[index], clickY[index]);
            context.closePath();
            context.stroke();
        }
    );
}
canvas.onmousedown = (e) => {
    console.log('mouseDown', e, e.clientX, e.offsetX);
    paint = true;
    addClick(e.clientX - e.offsetX, e.clientY - e.offsetTop);
    redraw();
};

canvas.onmousemove = (e) => {
    if (paint) {
        addClick(e.clientX - e.offsetX, e.clientY - e.offsetTop);
        redraw();
    }
}

canvas.onmouseup = () => {
    paint = false;
};

canvas.onmouseleave = ()=>{
    paint = false;
}
