// LE CADRE DE JEU



// 0) LA FILLETTE

// Déplacement de fillette avec le curseur

var curseurFillette = document.getElementById('fillette');

document.addEventListener('mousemove', deplacementFillette);

function deplacementFillette (evenementDeplacementSouris){
var positionX = evenementDeplacementSouris.clientX;
var positionY = evenementDeplacementSouris.clientY;
curseurFillette.style.left = positionX + "px";
curseurFillette.style.top = positionY + "px";
};

// calcul de la position left de fillette

function positionLeftFillette() {
    var fillette = document.getElementById("fillette");
    var posLeftFillette = fillette.offsetLeft;
    return posLeftFillette;
  }

// calcul de la position top de fillette

function positionTopFillette() {
    var fillette = document.getElementById("fillette");
    var posTopFillette = fillette.offsetTop;
    return posTopFillette;
  }

//=========================================================================================================

// 1) 1ER ALIEN 

// calcul de la position left de alienUn

function positionLeftAlienUn() {
    var alienUn = document.getElementById("alienUn");
    var posLeftAlienUn = alienUn.offsetLeft;
    return posLeftAlienUn;
  }

  // calcul de la position top de alienUn

function positionTopAlienUn() {
    var alienUn = document.getElementById("alienUn");
    var posTopAlienUn = alienUn.offsetTop;
    return posTopAlienUn;
  }


// mouvement alienUn en fonction de la position de alienUn et de fillette

var alienUn = document.getElementById("alienUn");
  
var mouvementAlienUn = function rapprochementAlienUn(){

    // mouvement horizontal (sur propriété left)

    if (positionLeftFillette() - positionLeftAlienUn() > 0){
        if(!isNaN(parseFloat(alienUn.style.left))){
            alienUn.style.left = parseFloat(alienUn.style.left) + 1 + 'px';
        }else{
            alienUn.style.left = '20%';            
        }
    }else{
        alienUn.style.left = parseFloat(alienUn.style.left) - 1 + 'px';
    }

    // mouvement vertical (sur propriété top)

    if (positionTopFillette() - positionTopAlienUn() > 0){
        if(!isNaN(parseFloat(alienUn.style.top))){
            alienUn.style.top = parseFloat(alienUn.style.top) + 1 + 'px';
        }else{
            alienUn.style.top = '20%';   
        }
    }else{
        alienUn.style.top = parseFloat(alienUn.style.top) - 1 + 'px';
    }
}


//=========================================================================================================

// 2) 2E ALIEN 

// calcul de la position left de alienDeux

function positionLeftAlienDeux() {
    var alienDeux = document.getElementById("alienDeux");
    var posLeftAlienDeux = alienDeux.offsetLeft;
    return posLeftAlienDeux;
  }

  // calcul de la position top de alienDeux

function positionTopAlienDeux() {
    var alienDeux = document.getElementById("alienDeux");
    var posTopAlienDeux = alienDeux.offsetTop;
    return posTopAlienDeux;
  }


// mouvement alienDeux en fonction de la position de alienDeux et de fillette

var alienDeux = document.getElementById("alienDeux");
  
var mouvementAlienDeux = function rapprochementAlienDeux(){

    // mouvement horizontal (sur propriété left)

    if (positionLeftFillette() - positionLeftAlienDeux() > 0){
        if(!isNaN(parseFloat(alienDeux.style.left))){
            alienDeux.style.left = parseFloat(alienDeux.style.left) + 1 + 'px';
        }else{
            alienDeux.style.left = '80%';            
        }
    }else{
        alienDeux.style.left = parseFloat(alienDeux.style.left) - 1 + 'px';
    }

    // mouvement vertical (sur propriété top)

    if (positionTopFillette() - positionTopAlienDeux() > 0){
        if(!isNaN(parseFloat(alienDeux.style.top))){
            alienDeux.style.top = parseFloat(alienDeux.style.top) + 1 + 'px';
        }else{
            alienDeux.style.top = '20%';    
        }
    }else{
        alienDeux.style.top = parseFloat(alienDeux.style.top) - 1 + 'px';
    }
}

//=========================================================================================================

// 3) 3E ALIEN 

// calcul de la position left de alienTrois

function positionLeftAlienTrois() {
    var alienTrois = document.getElementById("alienTrois");
    var posLeftAlienTrois = alienTrois.offsetLeft;
    return posLeftAlienTrois;
  }

  // calcul de la position top de alienTrois

function positionTopAlienTrois() {
    var alienTrois = document.getElementById("alienTrois");
    var posTopAlienTrois = alienTrois.offsetTop;
    return posTopAlienTrois;
  }


// mouvement alienTrois en fonction de la position de alienTrois et de fillette

var alienDeux = document.getElementById("alienTrois");
  
var mouvementAlienTrois = function rapprochementAlienTrois(){

    // mouvement horizontal (sur propriété left)

    if (positionLeftFillette() - positionLeftAlienTrois() > 0){
        if(!isNaN(parseFloat(alienTrois.style.left))){
            alienTrois.style.left = parseFloat(alienTrois.style.left) + 1 + 'px';
        }else{
            alienTrois.style.left = '20%';
                       
        }
    }else{
        alienTrois.style.left = parseFloat(alienTrois.style.left) - 1 + 'px';
    }

    // mouvement vertical (sur propriété top)

    if (positionTopFillette() - positionTopAlienTrois() > 0){
        if(!isNaN(parseFloat(alienTrois.style.top))){
            alienTrois.style.top = parseFloat(alienTrois.style.top) + 1 + 'px';
        }else{
            alienTrois.style.top = '80%';    
        }
    }else{
        alienTrois.style.top = parseFloat(alienTrois.style.top) - 1 + 'px';
    }
}

//=========================================================================================================

// 4) 4E ALIEN 

// calcul de la position left de alienQuatre

function positionLeftAlienQuatre() {
    var alienQuatre = document.getElementById("alienQuatre");
    var posLeftAlienQuatre = alienQuatre.offsetLeft;
    return posLeftAlienQuatre;
  }

  // calcul de la position top de alienQuatre

function positionTopAlienQuatre() {
    var alienQuatre = document.getElementById("alienQuatre");
    var posTopAlienQuatre = alienQuatre.offsetTop;
    return posTopAlienQuatre;
  }


// mouvement alienQuatre en fonction de la position de alienQuatre et de fillette

var alienQuatre = document.getElementById("alienQuatre");
  
var mouvementAlienQuatre = function rapprochementAlienQuatre(){

    // mouvement horizontal (sur propriété left)

    if (positionLeftFillette() - positionLeftAlienQuatre() > 0){
        if(!isNaN(parseFloat(alienQuatre.style.left))){
            alienQuatre.style.left = parseFloat(alienQuatre.style.left) + 1 + 'px';
        }else{
            alienQuatre.style.left = '80%';            
        }
    }else{
        alienQuatre.style.left = parseFloat(alienQuatre.style.left) - 1 + 'px';
    }

    // mouvement vertical (sur propriété top)

    if (positionTopFillette() - positionTopAlienQuatre() < 0){
        if(!isNaN(parseFloat(alienUn.style.top))){
            alienQuatre.style.top = parseFloat(alienQuatre.style.top) - 1 + 'px';
        }else{
            alienQuatre.style.top = '80%';    
        }
    }else{
        alienQuatre.style.top = parseFloat(alienQuatre.style.top) + 1 + 'px';
    }
}


// LANCEMENT DU JEU AVEC APPEL DES FONCTIONS DE DEPLACEMENT DES 4 ALIENS, AUTOMATISATION DES DEPLACEMENTS AVEC SETINTERVAL

setInterval(function() {
    [mouvementAlienUn(), mouvementAlienDeux(), mouvementAlienTrois(), mouvementAlienQuatre()];
},10)
