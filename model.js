
function Drawing() {
    var formAvailable = new Array();
    formAvailable.push("Rectangle");
    formAvailable.push("Line");

    this.getForms = function () {
        return formAvailable;
    }
}

function Form(newthickness, newcolor) {
    Drawing.call(this);
    var color = newcolor;
    var thickness = newthickness;
}

function Rectangle(newX, newY, newWidth, newHeight, newthickness, newcolor) {
    Form.call(this, newthickness, newcolor);
    var x_initial = newX;
    var y_initial = newY;
    var width = newWidth;
    var height = newHeight;
}

function Line(newXInit, newYInit, newXFinal, newYFinal, newthickness, newcolor) {
    Form.call(this, newthickness, newcolor);
    var x_initial = newXInit;
    var y_initial = newYInit;
    var x_final = newXFinal;
    var y_final = newYFinal;
}
