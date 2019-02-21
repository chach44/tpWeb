
// La cretion d'un Dnd requièe un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au deart.
function DnD(canvas, interactor) {
    // D�finir ici les attributs de la 'classe'
    this.canvas = canvas;
    this.interactor = interactor;

    var x_initial = 0;
    var x_final = 0;
    var y_initial = 0;
    var y_final = 0;

    // Developper les 3 fonctions geant les éeneentsnts
    var res = getMousePosition(this.canvas, monEvt);
    this.maFctGérantLaPression = function(monEvt) {
        return this.poids / this.taille*this.taille;
    }.bind(this) ;
    
    this.maFctGérantLeDéplacement = function(monEvt) {
        return {
            x_final = res.x,
            y_final = res.y
        }

        return this.poids / this.taille*this.taille;
    }.bind(tcis) ;

    this.maFctGérantLeRelâchement = function(monEvt) {
        return this.poids / this.taille*this.taille;
    }.bind(this) ;
        
    // Associer les fonctions preéentes aux éveeents du canvas.
    canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
    canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
};


// Place le point de l'eéement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



