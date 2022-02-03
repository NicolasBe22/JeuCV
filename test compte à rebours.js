var compteARebours = document.getElementById('compteurDebutJeu');
var compteur = 3;

var decompte = setInterval(function(){
    compteARebours.innerText = compteur;
    compteur--;
    if (compteur === 0) {
        compteARebours.innerText = "GO !!!";
        clearInterval(decompte);
    }
}, 1000); 