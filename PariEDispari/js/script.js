/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */
var sceltaPC;

var pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari);
var numero= prompt("scegli un numero da 1 a 5");
console.log(numero);
sceltaPC = numPC (5,1);
console.log(sceltaPc)

function numPc (max, min){
    var numeropc = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeropc; 
    
}
