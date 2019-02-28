
function Drawing() {
    this.formAvailable = new Array();

    this.addForm = function(form) { 
        this.formAvailable.push(form);
    }.bind(this);

    this.getForms = function () {
        return this.formAvailable;
    }.bind(this);
}

function Form(newthickness, newcolor) {
    this.color = newcolor;
    this.thickness = newthickness;
}

function Rectangle(newX, newY, newWidth, newHeight, newthickness, newcolor) {
    Form.call(this, newthickness, newcolor);
    this.x_initial = newX;
    this.y_initial = newY;
    this.width = newWidth;
    this.height = newHeight;
}
Rectangle.prototype = new Form();

function Line(newXInit, newYInit, newXFinal, newYFinal, newthickness, newcolor) {
    Form.call(this, newthickness, newcolor);
    this.x_initial = newXInit;
    this.y_initial = newYInit;
    this.x_final = newXFinal;
    this.y_final = newYFinal;
}
Line.prototype = new Form();