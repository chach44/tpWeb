Rectangle.prototype.paint = function (ctx) {
    Form.prototype.paint.call(this, ctx);
    ctx.beginPath();
    console.log("kjhgfds = "+this.x_initial);
    ctx.rect(this.x_initial, 
            this.y_initial, 
            this.width, 
            this.height);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    Form.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.x_initial, this.y_initial);
    ctx.lineTo(this.x_final, this.y_final);
    ctx.stroke();
};

Form.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        console.log(eltDuTableau);
        eltDuTableau.paint(ctx);
    });
};
