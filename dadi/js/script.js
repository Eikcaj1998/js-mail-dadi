/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
*/
console.log('JS OK');
const winnerDice = 'il vincitore è ';
const playerDice = 'il giocatore ha';
const iaDice = 'il computer'
const tiedMatch = 'hai pareggiato'
//lancio dei dadi
const dicePlayer = parseInt(Math.floor(Math.random() * 6) + 1);
const diceComputer = parseInt(Math.floor(Math.random() * 6) + 1);
//valore dei dati
console.log ('l\'utente ha fatto:' + dicePlayer);
console.log ('l\'IA ha fatto:' + diceComputer);
//variabili di vittoria
if(dicePlayer > diceComputer){
    console.log(winnerDice + playerDice )
}

else if (dicePlayer < diceComputer){
    console.log(winnerDice + iaDice)
}

else if (dicePlayer === diceComputer){
    console.log (tiedMatch)
}