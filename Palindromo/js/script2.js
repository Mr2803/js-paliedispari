//Una funzione per capire se la parola è palindroma

var parolaUser = prompt("inserisci una parola");


var parolaGirata = '';

for(var i = parolaUser.length -1 ; i>=0; i--){
    parolaGirata += parolaUser[i];
}
console.log(parolaGirata)

if(parolaGirata == parolaUser){
    console.log("è palindroma")
}else{
    console.log("non è palindroma")
}