/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */
//@ts-check
var sceltaPC , risultato;

var pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari);

var numero= prompt("scegli un numero da 1 a 5");
console.log(numero);

sceltaPC = numPc();
console.log(sceltaPC);

risultato = add();
console.log(risultato)

//BLOCCO FUNZIONI

function numPc (){
    var numeropc = Math.floor(Math.random() * 5) + 1;
    
    return numeropc; 
    
}


function add(){
    var somma = numero + sceltaPC;

    if(somma % 2 == 0 && pariDispari == "pari"){
        return "ha vinto il giocatore";
    }else if(somma % 2 == 0 && pariDispari == "dispari"){
        return "ha vinto il pc";
    }else if(somma % 2 !==0 && pariDispari == "dispari"){
        return "ha vinto il giocatore";
    } else if (somma % 2 !== 0 && pariDispari == "pari"){
        return "ha vinto il pc";
    }
}