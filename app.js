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

// Exercice Salaire
/*
function Personne(name, salaire, sexe, charge){
  
  this.name = name;
  this.salaire = salaire;
  this.sexe = sexe;
  this.charge = charge;

  this.impotsAPayer = function(){
    var taux = 18;
    if(this.sexe === "femme"){
      taux-=2;
    }
    switch(charge){
      case 3:
        taux = taux - 1;
      break;
      case 4:
        taux = taux - 2;
    }
    return this.salaire*taux/100;
  }

  this.assuranceApayer = function(){    
      return this.salaire*7/100;
  }

  this.pensionAPayer = function(){
    return this.salaire*5/100;
  }

  this.salaireNet = function(){
    return this.salaire - this.impotsAPayer() - this.assuranceApayer() - this.pensionAPayer();
  }

}


function getValue() {
    let name = document.getElementById("name").value;
    let salaire = document.getElementById("salaire").value;
    let sexe = document.getElementsByName("sexe").value;
    let charge = document.getElementById("charge").value;
    let salarie = new Personne(name, salaire, sexe, charge);
    console.log(sexe);
    res1 = name + ' ton salaire est de ' + (salarie.salaireNet()) + '€.';
    txt1.innerHTML = res1;
    console.log(res1)

}
*/

/*
function ajout() {
    let newItem = document.getElementById("course").value;
    const liste = document.getElementById('listecommissions');
    liste.innerHTML += '<li>'+newItem + '</li>';
    document.getElementById("course").value = '';
}

function reset() {
    const liste = document.getElementById('listecommissions');
    document.getElementById("course").value = '';
    liste.innerHTML = '';
}
*/
// Exercice changement de style
/*
const ajoute = () => {
    const color = ['red', 'blue', 'yellow', 'green', 'orange', 'DarkBlue', 'Chocolate']
    let pickColor = color[Math.floor(Math.random() *  6)];
    document.getElementById('zone').style = 'color: ' + pickColor;
}

const supprime = () => {document.getElementById('zone').removeAttribute("style");}
*/

/*
class Document {
    constructor(numEnreg, titre) {
        this.numEnreg = numEnreg;
        this.titre = titre;
    }

    get document() {
        return this.numEnreg + ' : ' + this.titre;
    }
}

class Livre extends Document {
    constructor(numEnreg, titre, auteur, nbrPages) {
        super(numEnreg,titre);
        this.auteur = auteur;
        this.nbrPages = nbrPages;
    }

    get livre() {
        return this.numEnreg + ' : ' + this.titre + ', auteur :  ' + this.auteur + ', ' + this.nbrPages + ' pages';
    }
}

class Revue extends Document {
    constructor(numEnreg, titre, mois, annee) {
        super(numEnreg,titre);
        this.mois = mois;
        this.annee = annee;
    }

    get revue() {
        return this.numEnreg + ' : ' + this.titre + ', date : ' + this.mois + ' ' + this.annee;
    }
}

class Dictionnaire extends Document {
    constructor(numEnreg, titre, langue) {
        super(numEnreg,titre);
        this.langue = langue;
    }

    get dictionnaire() {
        return this.numEnreg + ' : ' + this.titre + ', langue :  ' + this.langue;
    }
}

testDocument = new Document(1, 'Test');
res1 = testDocument.document;

testLivre = new Livre(2, 'Livre 1', 'Zola', 100);
res2 = testLivre.livre;

testRevue = new Revue(3, 'La Revue du monde', 'Mars', 2020);
res3 = testRevue.revue;

testDico = new Dictionnaire(4, 'Dico Larousse', 'Français');
res4 = testDico.dictionnaire;
*/

/*---------------------Fin Exercices---------------------*/
txt1.innerHTML = res1;
txt2.innerHTML = res2;
txt3.innerHTML = res3;
txt4.innerHTML = res4;


