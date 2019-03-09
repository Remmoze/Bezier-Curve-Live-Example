const canvas = document.querySelector('canvas');
canvas.width = canvas.height = 800;
const context = canvas.getContext('2d');

let points = [
    new Point(canvas, 200, 200, 'black'),
    new Point(canvas, 500, 300, 'green'),
    new Point(canvas, 500, 600, 'red'),
    new Point(canvas, 100, 700, 'black'),
]

function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(1, 1, 799, 799)

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = 'grey';
    context.moveTo(points[0].x, points[0].y);
    context.lineTo(points[1].x, points[1].y);
    context.moveTo(points[3].x, points[3].y);
    context.lineTo(points[2].x, points[2].y);
    context.stroke();

    points.forEach(e => e.draw(context));

    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(points[0].x, points[0].y)
    context.bezierCurveTo(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y)
    context.stroke();
    
    points.forEach(e => e.draw(context));
    requestAnimationFrame(redraw);
}
redraw();
