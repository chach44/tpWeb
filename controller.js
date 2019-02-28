
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    var currEditingMode = editingMode.line;
    var currLineWidth = 5;
    var currColour = '#000000';
    var currentShape = 0;

    //var myDND = new DnD(canvas, this);

    this.currLineWidth = document.getElementById('spinnerWidth').value;
    this.currColour = document.getElementById('colour').value;
    if (document.getElementById('butRect').checked) {
        this.currEditingMode = editingMode.rect;
        console.log("Rectangle en cours ....");
    } else if (document.getElementById('butLine').checked) {
        this.currEditingMode = editingMode.line;
        console.log("Line en cours ....");
    }

    this.onInteractionStart = function (myDND) {
        console.log("jhgfsdqdfrgthy " + myDND.x_initial);
        switch (this.currEditingMode) {
            case editingMode.rect: {
                currentShape = new Rectangle(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_initial,
                    myDND.y_initial,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
            case editingMode.line: {
                currentShape = new Line(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_initial,
                    myDND.y_initial,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
        }
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionUpdate = function (myDND) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                currentShape = new Rectangle(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_final - myDND.x_initial,
                    myDND.y_final - myDND.y_initial,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
            case editingMode.line: {
                currentShape = new Line(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_final,
                    myDND.y_final,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
    }.bind(this);

    this.onInteractionEnd = function (myDND) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                currentShape = new Rectangle(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_final - myDND.x_initial,
                    myDND.y_final - myDND.y_initial,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
            case editingMode.line: {
                currentShape = new Line(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_final,
                    myDND.y_final,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addShape(this.currentShape);
        drawing.paint(ctx, canvas);
        this.currentShape = 0;
    }.bind(this);
};


