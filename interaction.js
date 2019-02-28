
function DnD(canvas, interactor) {
    this.x_initial = 0;
    this.x_final = 0;
    this.y_initial = 0;
    this.y_final = 0;
    this.mousePress = false;

    this.mouseDownFunction = function (evt) {
        this.mousePress = true;
        var res = getMousePosition(canvas, evt);
        this.x_initial = res.x;
        this.y_initial = res.y;
        interactor.onInteractionStart(this);

        console.log("Pression : x=" + this.x_initial + " y=" + this.y_initial);
    }.bind(this);

    this.mouseMoveFunction = function (evt) {
        if (this.mousePress) {
            var res = getMousePosition(canvas, evt);
            this.x_final = res.x;
            this.y_final = res.y;
            interactor.onInteractionUpdate(this);
        }
    }.bind(this);

    this.mouseUpFunction = function (evt) {
        if (this.mousePress) {
            var res = getMousePosition(canvas, evt);
            this.x_final = res.x;
            this.y_final = res.y;
            interactor.onInteractionEnd(this);
            this.mousePress = false;
            
            console.log("Relachement : x=" + this.x_final + " y=" + this.y_final);
        }
    }.bind(this);

    // Associer les fonctions precedentes aux evenements du canvas.
    canvas.addEventListener("mousedown", this.mouseDownFunction, false);
    canvas.addEventListener("mousemove", this.mouseMoveFunction, false);
    canvas.addEventListener("mouseup", this.mouseUpFunction, false);
};

function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



