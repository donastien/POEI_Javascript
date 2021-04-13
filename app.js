const txt1 = document.querySelector('.text1');
const txt2 = document.querySelector('.text2');
const txt3 = document.querySelector('.text3');
const txt4 = document.querySelector('.text4');
/*---------------------Exercices-------------------------*/
let res1 = '';
let res2 = '';
let res3 = '';
let res4 = '';
// Exercice TryCatch ---------------------------------------
/*
function division (a, b) {
    if(b === 0 ) {
        throw 'Division par 0 impossible' // Throw permet de créer un nouvelle erreur
    }
    return a/b;
}

try {
    let res = division(1, 0);
    console.log(res)
} catch (e) {
    console.log('retour de catch : ' + e);
} */

// Exercice Objet1 -----------------------------------------
/*
(function famille() {
    let person1 = {
        firstName: 'Ritchi',
        lastName: 'LEFOREST',
        age: 29,
        isAdult: function() {return this.age > 18}
    }

    let person2 = {
        firstName: 'Pascal',
        lastName: 'FASSOT',
        age: 12,
        isAdult: function() {return this.age > 18}
    }

    let person3 = {
        firstName: 'Thomas',
        lastName: 'BEN',
        age: 32,
        isAdult: function() {return this.age > 18}
    }
    res1 = 'isAdult : ' + person1.isAdult();
    res2 = 'isAdult : ' + person2.isAdult();
    res3 = 'isAdult : ' + person3.isAdult();
})();
*/

/* 
// Exercice Function Livre
function Document(numEnreg, titre) {
    this.numEnreg = numEnreg;
    this.titre = titre;
    
}

function Livre(numEnreg, titre, auteur, nbPages) {
    Document.call(this, numEnreg, titre);
    this.auteur = auteur;
    this.nbPages = nbPages;
    this.displayPage = function() {
        if (this.nbPages >= 0 && this.nbPages <= 100) {
            return('Nombre de page entre 0 et 100')
        } else if(this.nbPages >= 100 && this.nbPages <= 200) {
            return('Nombre de page entre 101 et 200')
        } else if(this.nbPages >= 201 && this.nbPages <= 300) {
            return('Nombre de page entre 201 et 300')
        } else if(this.nbPages > 301) {
            return('Nombre de page supérieur à 301')
        }
    }
}

function Revue(numEnreg, titre, mois, annee) {
    Document.call(this, numEnreg, titre);
    this.mois = mois;
    this.annee = annee;
}

function Dictionnaire(numEnreg, titre, langue) {
    Document.call(this, numEnreg, titre);
    this.langue = langue;
}

Livre.prototype = Object.create(Document.prototype);
let livre1 = new Livre(12, 'Le Livre', 'Zola', 105);
res1 = livre1.displayPage();
*/

/*---------------------Fin Exercices---------------------*/
txt1.innerHTML = res1;
txt2.innerHTML = res2;
txt3.innerHTML = res3;
txt4.innerHTML = res4;


