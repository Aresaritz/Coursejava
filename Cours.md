# Développement web : javascript, web api fecth et json

<u>B1 ESGI A+B INI - S2 - LYON </u>


runtime= navigateur internet

https://developer.mozilla.org/fr/

## Introduction a Javascript
node: fichier pouvant lire du javascript souvent utilisé sur github

javascrpit permet de dynamiser les pages web sans la recharger (à l'époque)
travaillent avec html et css
dynamique et intératifs

git init :creer un depot caché pour git dans le repertoire
dans un depot non suivi 

git add "fichiernom" : ajouter le ficher au suivi GIt
git add . : ajouter tous les fichiers ... ... ...

git commit -m "Message de validation": sauvegarder

git status : verifier l'tat du dépot git

-m : creer un message (utile quand sauvegarde avec commit)

commit: sauvegarder sur git ("terme")

github > site web qui donne des services 
git> logiciel locale pour les projets
client lourd >






Selectionner des elements

Par ID:
let element = document.getElementById("monId");

par classe:
let elements = document.getElementsByClassName("maClasse");

par balise:
let elements = document.getElementsByTagName("p");

Modifier des éléments

changer le texte:
document.getElementsById("MonId").textContent = "Nouveau texte !";

Ajouter un écouteur d'évènements:
document.getElementById("Monboutton").addEventListener("click", function (){ alert("Bouton cliqué !);
});

function changerTitre() {
    document.getElementById("titre").textContent = "Titre modifié";
}


 script javascript
// declaration variable
// var, let et const

var test = "test"; //Déclarer avec une portée infinie (NE PAS UTILISER)

let test2 = "test2"; // Déclarer avec une portée limité

const test3 ="test3";
changerTitre();


# fonction en JS

// le second parametre est un callback
addButton.addEventListener("click", function(Ajouter){
    alert("a+b");
});

# Tableau en JS

ex : let fruits = ["pommme","fraise"];

.push() : ajouter à la fin
.pop() : retirer le dernier ou l'elment choisi dans le pop
.shift() : travailler avec le dernier element
.split():
.slice():

