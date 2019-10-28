/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */
//@ts-check
var sceltaPC, sommaFuori,pd, risultato;

var pariDispari = prompt("scegli pari o dispari");
console.log("il giocatore tra pari e dispari ha scelto: " + pariDispari);

var numero = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("il numero scelto dal giocatore tra 1 e 5 è: " + numero);

sceltaPC = numPc();

console.log("il numero scelto dal pc è :" + sceltaPC);

sommaFuori = add(numero, sceltaPC);
console.log("la somma dei numeri scelti dal pc e dall'utente è :" + sommaFuori);

pd = pariDISPARI(sommaFuori)
console.log("il risultato della somma dei numeri è :" + pd);

risultato = parDisp(sommaFuori, pariDispari);
console.log(risultato);

//BLOCCO FUNZIONI

function numPc() {
    var numeropc = Math.floor(Math.random() * 5) + 1;
    return numeropc;
}


function add(num1, num2) {
    var somma = num1 + num2;
    return somma;

}

function parDisp(somma, pariDispari) {
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


function pariDISPARI(numcheck) {

    if (numcheck % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}