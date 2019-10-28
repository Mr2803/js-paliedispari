//Una funzione per capire se la parola è palindroma

var parolaUser = prompt("inserisci una parola");
console.log(parolaUser)
var parolaUser2 = parolaUser.split("");
console.log(parolaUser2);
var reverseparolaUser2 = reverse(parolaUser2)
console.log(reverseparolaUser2)
var reverseparolaUser2Unita = join(reverseparolaUser2)
console.log("'" + reverseparolaUser2Unita + "'")


//console.log(parolaUser.split(""));//con il comando SPLIT divido la parola inserita dall'utente per ogni carattere diventa quindi un array (se non inserissi gli apici lo considera come un array con un solo elemento)
//console.log(parolaUser.split("").reverse(""));//uso poi il comando REVERSE(preceduto dal comando split altrimenti non funziona (probabile funzioni solo con array quindi non può dividere una stringa)) che inverte l'ordine dell'array precedentemente creato dal comando split
//console.log(parolaUser.split("").reverse().join(""))//uso il comando JOIN che SENZA VIRGOLETTE mi restituisce l'array come lettere seguite da una virgola,CON le virgolette invece mi restituisce una sola parola
document.getElementById("test").innerHTML = palindromo(parolaUser);


//BLOCCO FUNZIONI

//funzione per revertare l'array
function reverse(firstarray){
    var test = new Array;
    for(var i=firstarray.length-1; i>= 0; i--){
        test.push(firstarray[i]);
    }
    return test;
}

function join(secondarray){
    var test2 = new Array;
  for(var j = 0 ; j< reverseparolaUser2.length; j++ ){
        test2.push(secondarray[j])
     console.log("la parola unita è:" +  reverseparolaUser2)
  }
    return test2;
}


function palindromo(pal) {
    var palin = pal.split("").reverse("").join("");
    //creo una variabile d'appoggio che ho chiamato palin e dico che PALIN sarà uguale all'argomento della funzione palindromo(argomento che dopo diventerà la parola inserita dall'utente,nel mio caso) però DIVISA(SPLIT),REVERTATA(REVERSE),UNITA(JOIN)

    if (palin === pal) {
        return "la parola inserita è palindroma";
        // nel IF specifico che se PALIN(variabile d'appoggio) sarà uguale a pal(argomento funzione e in questo caso successivamente parolaUser) allora la parola è palindroma
    } else {
        return "la parola inserita non è palindroma";
        // nell'else abbiamo il caso contrario , quindi palin non sarà uguale a pal
    }
}