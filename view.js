Rectangle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.rect(this.x_initial, this.y_initial, this.x_final-this.x_initial, this.y_final-this.y_initial);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x_initial, this.y_initial);
    ctx.lineTo(this.x_final, this.y_final);
    ctx.stroke();
};

Form.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
};

Drawing.prototype.paint = function (ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        console.log(eltDuTableau);
        eltDuTableau.paint(ctx);
    });
};
