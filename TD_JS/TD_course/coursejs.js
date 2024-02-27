let panier = [];
let totaux = 0;

function AjouterItem(item,panier,totaux,action){
    let price = {"Pomme" : 0.5,"Banane" : 0.75,"Kiwi" : 0.25, "Poire" : 1.25, "Fraise" : 0.25}
    let table = document.getElementById("table");

    console.log(totaux);
    

    if (action === "vider"){
        console.log(table.rows.length);
        while (table.rows.length > 1){
            table.deleteRow(1);
        }
        panier.length = 0;
        totaux = 0;
        document.getElementById("totaux").textContent = "Le prix total est de : " + totaux + " €";
        
        const listeobj = Object.keys(panier);
        for (const i of listeobj){
            delete panier[i];
        }
        console.log(panier);
    
    }else if (action === "ajouter"){

    

        if (item in panier){
            panier[item]=panier[item] +1;
            let ligne = table.rows.namedItem(item);
            let somme = panier[item] * price[item];

            // console.log(price[item]);
            // console.log(panier[item]);
            // console.log(somme);
            
            ligne.cells[1].innerText = panier[item];
            ligne.cells[2].innerText = somme ;
            
        
        }
        else{
            panier.push(item);
            panier[item]=1;

            console.log(panier);
            // console.log(table);

            let ligne = table.insertRow(1);
            ligne.id=item;
            let nom = ligne.insertCell(0);
            let quantite = ligne.insertCell(1);
            ligne.insertCell(2);

            nom.innerText = item;
            quantite.innerText = panier[item];
            ligne.cells[2].innerText = price[item];
        }

        console.log(totaux);
        totaux = totaux + price[item] ;
        document.getElementById("totaux").textContent = "Le prix total est de : " + totaux + " €";
    
        

    }
    return totaux;
}   

// function ViderPanier(panier,totaux){
//     panier=[];
//     totaux=

// }












