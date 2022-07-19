const myName = prompt('Qual e\' il tuo nome?');
const mySurname = prompt('Qual e\' il tuo cognome?');
const myAge = prompt('Quanti anni hai?');
const myColor = prompt('Qual e\' il tuo colore preferito?');
// let numGen = 10;
let numGen = Math.floor(Math.random() * 100).toString(); // Math.floor -> con la collaborazione di W3School <3

// console.log(typeof(numGen));
// console.log(myName + myAge + myColor);

document.getElementById('generator').innerHTML = 'La tua nuova password &eacute; &rightarrow; ' + myName + mySurname + myAge + myColor + numGen;