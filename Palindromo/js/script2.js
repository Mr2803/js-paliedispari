//Una funzione per capire se la parola è palindroma
//@ts-check

var parolaUser = prompt("inserisci una parola");
console.log(parolaUser)

pal(parolaUser);


function pal(palindroma){
    var parolaReverse = '';

    for (var i = palindroma.length - 1; i >= 0; i--) {
        parolaReverse += palindroma[i];
    }

    if (parolaReverse == palindroma) {
        console.log("è palindroma")
    } else {
        console.log("non è palindroma")
    }
}
