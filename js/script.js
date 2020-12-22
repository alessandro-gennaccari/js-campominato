// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var nCpu = [];
var nUser = [];
var bomb = false;
var numero;
var numeroUser;
var score = 0;
var difficulty = diff(difficulty);
var nMax;

switch (difficulty){
    case 1:
        nMax = 80;
        break;
    case 2:
        nMax = 50;
        break;
    default:
        nMax = 100;
}

while (nCpu.length < 16) {

    numero = nRandom(1,nMax);
    if (nCpu.includes(numero) == false){
        nCpu.push(numero);
    }
}

while (nUser.length < (nMax - 16) && bomb == false) {
    numeroUser = parseInt(prompt('Inserisci un numero'));
    if (numeroUser < 1 || numeroUser > 100 || isNaN(numeroUser)) {
        alert('Puoi inserire solo numeri compresi tra "1" e "100" compresi.\nTutto il resto non è ammesso.');
    } else if (nUser.includes(numeroUser)) {
        alert('Hai già provato questo numero!');
    } else if (nCpu.includes(numeroUser)) {
        alert('Hai Perso!\nLa partita è terminata.\nIl tuo score è = ' + score);
        bomb = true;
    } else {
        nUser.push(numeroUser);
        score++;

    }
}

console.log(nCpu);
console.log(nUser);

// Funzioni
// Gerera un numero random
function nRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Seleziona una difficolta adeguata
function diff(set) {
    do {
        set = parseInt(prompt('Scegli La difficoltà tra "0" , "1" , "2" '));
    } while (set != 0 && set != 1 && set != 2);
    return set;
}