/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */
//@ts-check
var sceltaPC, sommaFuori,risultato;

var pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari);

var numero= parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numero);

sceltaPC = numPc();

console.log(sceltaPC);

sommaFuori = add(numero,sceltaPC);
console.log(sommaFuori)

risultato = parDisp(sommaFuori,pariDispari);
console.log(risultato);

//BLOCCO FUNZIONI

function numPc (){
    var numeropc = Math.floor(Math.random() * 5) + 1;
    return numeropc; 
}


function add(num1,num2){
    var somma = num1 + num2;
    console.log(somma);
    return somma;
    
}

function parDisp(somma,pariDispari){
    if (somma % 2 == 0 && pariDispari == "pari") {
        return "ha vinto il giocatore";
    } else if (somma % 2 == 0 && pariDispari == "dispari") {
        return "ha vinto il pc";
    } else if (somma % 2 !== 0 && pariDispari == "dispari") {
        return "ha vinto il giocatore";
    } else if (somma % 2 !== 0 && pariDispari == "pari") {
        return "ha vinto il pc";
    }
}

