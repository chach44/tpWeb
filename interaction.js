
// La cretion d'un Dnd requiee un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au depart.
function DnD(canvas, interactor) {
    // Definir ici les attributs de la 'class

    var x_initial = 0;
    var x_final = 0;
    var y_initial = 0;
    var y_final = 0;

    this.getXInit = function () {
        return x_initial;
    }
    this.getYInit = function () {
        return y_initial;
    }
    this.getXFinal = function () {
        return x_final;
    }
    this.getYFinal = function () {
        return y_final;
    }

    // Developper les 3 fonctions gerant les evenements
    this.mouseDownFunction = function (evt) {
        var res = getMousePosition(canvas, evt);
        x_initial = res.x;
        y_initial = res.y;
        console.log('Pression : x=' + x_initial + " y=" + y_initial);

        //interactor.onInteractionStart(this);

    }.bind(this);

    this.mouseMoveFunction = function (evt) {
        var res = getMousePosition(canvas, evt);
        x_final = res.x;
        y_final = res.y;
        //console.log('Deplacement : x=' + res.x + " y=" + res.y);

        //interactor.onInteractionUpdate(this);

    }.bind(this);

    this.mouseUpFunction = function (evt) {
        var res = getMousePosition(canvas, evt);
        x_final = res.x;
        y_final = res.y;
        console.log('Relachement : x=' + x_final + " y=" + y_final);

        //interactor.onInteractionEnd(this);

    }.bind(this);

    // Associer les fonctions precedentes aux evenements du canvas.
    canvas.addEventListener('mousedown', this.mouseDownFunction, false);
    canvas.addEventListener('mousemove', this.mouseMoveFunction, false);
    canvas.addEventListener('mouseup', this.mouseUpFunction, false);
};


// Place le point de l'evenement evt relativement a la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



