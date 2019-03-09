class Point {
    constructor(canvas, x, y, color='black') {
        this.x = x;
        this.y = y;
        this.radius = 6;
        this.color = color;
        this.fill = false;
        this.dragged = false;
        this.attach(canvas);
    }

    draw(context) {
        context.save()
        
        context.lineWidth = 1;
        context.strokeStyle = this.color;
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2);

        context[this.dragged?"fill":"stroke"]();

        context.restore();
    }

    attach() {

        let mouseOffset = {x:0, y:0};

        canvas.addEventListener('mousedown', e => {
            if(this.intersects(e.offsetX, e.offsetY)) {
                this.dragged = true;
                mouseOffset.x = this.x - e.offsetX;
                mouseOffset.y = this.y - e.offsetY;
            }
                
        });
        canvas.addEventListener('mousemove', e => {
            if(this.dragged) {
                this.x = e.offsetX + mouseOffset.x;
                this.y = e.offsetY + mouseOffset.y;
            }
        });
        canvas.addEventListener('mouseup', e => {
            this.dragged = false;
        })
    }

    intersects(x, y) {
        let ox = x - this.x;
        let oy = y - this.y;
        return Math.sqrt(ox*ox + oy*oy) < this.radius;
    }
}