
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;

    // Liez ici les widgets � la classe pour modifier les attributs pr�sents ci-dessus.

    new DnD(canvas, this);

    this.onInteractionStart = function (DnD) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                this.currentShape = new Rectangle(DnD.x_initial, DnD.y_initial, 0, 0, this.currLineWidth, this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(DnD.x_initial, DnD.y_initial, DnD.x_final, DnD.y_final, this.currLineWidth, this.currColour);
                break;
            }
        }
    }

    this.onInteractionUpdate = function (DnD) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                this.currentShape = new Rectangle(DnD.x, DnD.y, 0, 0, this.currLineWidth, this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(DnD.x_initial, DnD.y_initial, DnD.x_final, DnD.y_final, this.currLineWidth, this.currColour);
                break;
            }
        }
    }
    this.onInteractionEnd = function () {

    }
};


