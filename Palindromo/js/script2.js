//Una funzione per capire se la parola è palindroma

var parolaUser = prompt("inserisci una parola");
console.log(parolaUser)

var parolaReverse = '';

for(var i = parolaUser.length -1 ; i>=0; i--){
    parolaReverse += parolaUser[i];
}
console.log(parolaReverse)

if(parolaReverse == parolaUser){
    console.log("è palindroma")
}else{
    console.log("non è palindroma")
}