/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */
//@ts-check
var sceltaPC, sommaFuori,pd, risultato;
var hand = ["<img src='img/uno.png'>", "<img src='img/due.png'>", "<img src='img/tre.png'>", "<img src='img/quattro.png'>", "<img src='img/cinque.png'>"]
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

risultato = vincitore(pariDispari,pd);
console.log(risultato);

//BLOCCO FUNZIONI

//funzione per stabilire il numero del pc
function numPc() {
    var numeropc = Math.floor(Math.random() * 5) + 1 ;
    for (var i =0; i< hand.length;i++){
        if(i==numeropc){
            document.getElementById("testmano").innerHTML= hand[i - 1];
        }
    }
    return numeropc;

}

//funzione per stabilire la somma dei numeri scelti dal pc e dall'utente
function add(num1, num2) {
    var somma = num1 + num2;
    return somma;

}

//funzione per stabilire se la somma dei numeri scelti dal pc e dall'utente è pari o dispari
function pariDISPARI(numcheck) {

    if (numcheck % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

//funzione per stabilire chi ha vinto
function vincitore(sceltaUser, sommaParoDisp) {
    if(sceltaUser==sommaParoDisp){
        return "ha vinto il giocatore"
    }else{
        return "ha vinto il pc"
    }
}


