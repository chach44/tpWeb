
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;

    new DnD(canvas, this);

    this.onInteractionStart = function (myDND) {

        this.currLineWidth = document.getElementById('spinnerWidth').value;
        this.currColour = document.getElementById('colour').value;
        if (document.getElementById('butRect').checked) {
            this.currEditingMode = editingMode.rect;
            console.log("Create rectangle ....");
        } else if (document.getElementById('butLine').checked) {
            this.currEditingMode = editingMode.line;
            console.log("Create line ....");
        }

    };

    this.onInteractionUpdate = function (myDND) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                this.currentShape = new Rectangle(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_final - myDND.x_initial,
                    myDND.y_final - myDND.y_initial,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(myDND.x_initial,
                    myDND.y_initial,
                    myDND.x_final,
                    myDND.y_final,
                    this.currLineWidth,
                    this.currColour);
                break;
            }
        }
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
    }.bind(this);

    this.onInteractionEnd = function (myDND) {
        console.log("Add new shape ...")
        drawing.addForm(this.currentShape);
        drawing.paint(ctx, canvas);
        this.currentShape = 0;
    }.bind(this);
}


