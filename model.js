
function Drawing() {
    var formAvailable = new Array();
    this.formAvailable.push("rectangle");
    this.formAvailable.push("line");
}

function Form(newcolor, newthickness) {
    var color = newcolor;
    var thickness = newthickness;
}

function Rectangle(newcolor, newthickness, newX, newY, newWidth, newHeight) {
    Form.call(this, newcolor, newthickness);
    var x = newX;
    var y = newY;
    var width = newWidth;
    var height = newHeight;
}

function Line(newcolor, newthickness, newXInit, newYInit, newXFinal, newYFinal) {
    Form.call(this, newcolor, newthickness);
    var x_initial = newXInit;
    var y_initial = newYInit;
    var x_final = newXFinal;
    var y_fFinal = newYFinal;
}
