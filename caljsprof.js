// formulaires
const form = document.getElementById("form");

// inputs
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const select = document.getElementById("select");

// resultat
const result = document.getElementById("result");

// Création des events
// le parametre event est passe de façon implicite, son nom peut etre changé mais il est préférable de le laisser pour la compréhension

    
    // Recuperation de la valeur de select (add,sub,mul,div)
    console.log(('Valeur de l\'element select: ',select.value))

    // Recuperation de la valeur des inputs*
    console.log(("Valeur de l'élément input1:",input1.value))
    console.log(("Valeur de l'élément input2:",input2.value))

    //Utilisation de la valeur du select pour effectuer le calcul
    switch (select.value){
        case "add":
            console.log("calcul choisi addition");
            
            result.innerText= Number(input1.value) + Number(input2.value);
            break;
        case "sub":
            console.log("calcul choisi soustraction");
            result.innerText= Number(input1.value) - Number(input2.value);
            break;
            

        case "mul":
            console.log("calcul choisi multiplication");
            result.innerText= Number(input1.value) * Number(input2.value);
            break;
            
        
        case "div":
            console.log("calcul choisi division");
            result.innerText= Number(input1.value) / Number(input2.value);
            break;    
    };



