
function DnD(canvas, interactor) {
    var x_initial = 0;
    var x_final = 0;
    var y_initial = 0;
    var y_final = 0;
    var mousePress = false;

    // Developper les 3 fonctions gerant les evenements
    this.mouseDownFunction = function (evt) {
        mousePress = true;
        var res = getMousePosition(canvas, evt);
        this.x_initial = res.x;
        this.y_initial = res.y;
        interactor.onInteractionStart(this);

        console.log("Pression : x=" + this.x_initial + " y=" + this.y_initial);
    }.bind(this);

    this.mouseMoveFunction = function (evt) {
        if (mousePress) {
            var res = getMousePosition(canvas, evt);
            this.x_final = res.x;
            this.y_final = res.y;
            interactor.onInteractionUpdate(this);
            console.log("Deplacement : x=" + this.x_final + " y=" + this.y_final);
        }
    }.bind(this);

    this.mouseUpFunction = function () {
        if (mousePress) {
            interactor.onInteractionEnd(this);
            mousePress = false;
        }
    }.bind(this);

    // Associer les fonctions precedentes aux evenements du canvas.
    canvas.addEventListener("mousedown", this.mouseDownFunction, false);
    canvas.addEventListener("mousemove", this.mouseMoveFunction, false);
    canvas.addEventListener("mouseup", this.mouseUpFunction, false);
};

function getMousePosition(canvas, evt) {
    this.rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



