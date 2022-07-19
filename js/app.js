const myName = prompt('Qual e\' il tuo nome?');
const mySurname = prompt('Qual e\' il tuo cognome?');
const myAge = prompt('Quanti anni hai?');
const myColor = prompt('Qual e\' il tuo colore preferito?');
let numGen = 10;

// console.log(myName + myAge + myColor);

document.getElementById('generator').innerHTML = 'La tua nuova password &eacute; &rightarrow; ' + myName + mySurname + myAge + myColor + numGen;