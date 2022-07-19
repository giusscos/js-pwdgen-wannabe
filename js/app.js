const myName = prompt('Come ti chiami?');
const myAge = prompt('Quanti anni hai?');
const myColor = prompt('Qual e\' il tuo colore preferito?');
let numGen = 10;

// console.log(myName + myAge + myColor);

document.getElementById('generator').innerHTML = 'La tua nuova password &eacute; >> ' + myName + myAge + myColor + numGen;