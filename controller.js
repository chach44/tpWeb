
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;

    // Liez ici les widgets a la classe pour modifier les attributs presents ci-dessus.

    new DnD(canvas, this);

    //forme creee (Rectangle ou Ligne) en fonction de l'attribut
    this.onInteractionStart = function (DnD) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                this.currentShape = new Rectangle(DnD.x_initial, DnD.y_initial, 0, 0, this.currLineWidth, this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(DnD.x_initial, DnD.y_initial, DnD.x_initial, DnD.x_initial, this.currLineWidth, this.currColour);
                break;
            }
        }
        this.currentShape.paint(ctx);
    }
    //la mettre à jour lorsque l'utilisateur bouge la souris 
    this.onInteractionUpdate = function (DnD) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                this.currentShape = new Rectangle(DnD.x_initial, DnD.y_initial, DnD.x_final - DnD.x_initial, DnD.y_final - DnD.x_initial, this.currLineWidth, this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(DnD.x_initial, DnD.y_initial, DnD.x_final, DnD.y_final, this.currLineWidth, this.currColour);
                break;
            }
        }
        this.currentShape.paint(ctx);
    }

    //l'ajouter au dessin lors du relâchement
    this.onInteractionEnd = function (DnD) {
        switch (this.currEditingMode) {
            case editingMode.rect: {
                this.currentShape = new Rectangle(DnD.x_initial, DnD.y_initial, DnD.x_final - DnD.x_initial, DnD.y_final - DnD.x_initial, this.currLineWidth, this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(DnD.x_initial, DnD.y_initial, DnD.x_final, DnD.y_final, this.currLineWidth, this.currColour);
                break;
            }
        }
        this.currentShape.paint(ctx);
        this.currentShape = 0;
    }
};


