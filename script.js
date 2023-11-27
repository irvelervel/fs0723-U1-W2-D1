console.log('Hello World!')

// Il mestiere del software developer si incentra sulla RISOLUZIONE di PROBLEMI!
// Voi scriverete ALGORITMI! Un algoritmo è una serie di passaggi, ordinati, che vi porta
// a raggiungere la SOLUZIONE di un PROBLEMA!
// Una serie di istruzioni si definisce ALGORITMO se, dato lo stesso identico problema,
// porta sempre alla stessa identica soluzione.

// Un concetto molto importante nello sviluppo software è il concetto di VARIABILE.
// Una VARIABILE può venire immaginata come una scatola dotata di un contenuto, oppure
// come una bacinella che contiene un ingrediente per una torta, al fine di ottenere
// un risultato finale, seguendo ad es. una ricetta.
// Una variabile, in un computer, è un indirizzo relativo ad una cella di memoria.

// VARIABILI
// in JS, le variabili tipicamente si dichiarano con la parola chiave (keyword) "let"
let dog // ho appena creato una variabile, una "scatola", di nome "dog"
// potevo chiamarla come volevo, con qualche eccezione (non posso ad es. cominciare
// il nome della variabile con un numero). Può anche essere un nome fatto da più parole
// di solito si segue la cosiddetta nomenclatura "camelCase" es. myDog

console.log('valore di dog prima di assegnazione', dog) // questo è molto comodo per controllare il VALORE della variabile,
// ovvero cosa ho inserito nella scatola!
// il valore della variabile "dog" al momento è UNDEFINED, ovvero "non definito"
// undefined significa che il valore di questa variabile non è mai stato assegnato

// assegniamo ora un valore alla variabile dog
dog = 'Fido'
console.log('valore di dog DOPO assegnazione', dog)

let cat = 'Silvestro' // creazione della variabile "cat" e assegnazione del valore
// in un unico passaggio
console.log('il valore di cat è', cat)

let sentence = "Quell'albero è gigantesco 123"

// che TIPI DI DATO PRIMITIVI esistono in JS? fin'ora abbiamo visto solamente le cosiddette "stringhe"

// 1) stringa, una serie di caratteri delimitati da apici, virgolette o backticks ``
// 2) un numero
let myNumber = 10
// 3) un valore booleano, "boolean"
let canYouDrive = true // sai guidare?
let doYouHaveAHorse = false // hai un cavallo?
// 4) null
let nothing = null // il contenuto di questa scatola è nullo!
// indica l'ASSENZA di valore!
console.log(nothing)
// 5) undefined, una variabile a cui non è stato assegnato un valore

let sum = 0 // inizializzazione, parte da 0
sum = 5 // poi assegno a sum il numero 5
sum = 12 // riassegno sum a 12
sum = sum + 10 // ?? 22
// quanto vale sum ora? come lo controllo?
console.log('dopo tutte le operazioni sum vale', sum)
sum = 100000

let x = 50
let y = 120
let z = x + y
console.log('quanto vale z?', z)

let anotherx = '50'
let anothery = '120'
let anotherz = anotherx + anothery
// ???
console.log('anotherz vale', anotherz)
// "50120" come stringa!!

let firstName = 'Stefano'
let lastName = 'Casasola'
let completeName = firstName + ' ' + lastName
console.log(completeName) // 'Stefano Casasola'

// OPERATORI MATEMATICI
let number1 = 5
let number2 = 8

let sumOfTwoNumber = number1 + number2 // 13
let subtractionOfTwoNumbers = number1 - number2 // -3
let multiplicationOfTwoNumbers = number1 * number2 // 40
let divisionOfTwoNumbers = number1 / number2
console.log('divisionOfTwoNumbers', divisionOfTwoNumbers) // 0.625
let moduleOfTwoNumbers = number2 % number1 // cinque modulo otto
console.log('moduleOfTwoNumbers', moduleOfTwoNumbers)

console.log(firstName / lastName) // NaN, not a number

// LET vs CONST

// LET crea una variabile il cui valore può venire RI-ASSEGNATO in futuro!
let myName = 'Stefano'
myName = 'Adriano'
myName = 'Wendy'
// myName = 100 // NON FARE! la buona prassi prevede che una variabile nata ad es.
// come stringa DEBBA SEMPRE OSPITARE STRINGHE!

// CONST crea una variabile il cui valore NON può venire RI-ASSEGNATO in futuro!
const fixedNumber = 100
// fixedNumber = 0 // ERRORE!
// const crea una variabile "costante", ovvero una scatola che nasce già con il nastro
// adesivo sopra, sigillata!

// OPERATORI DI ASSEGNAZIONE
let newNumber = 500
// newNumber <-- 500

// newNumber = newNumber + fixedNumber, oppure scorciatoia:
newNumber += fixedNumber
// newNumber vale 500 + 100 --> 600
console.log('newNumber', newNumber)

// OPERATORI DI COMPARAZIONE e VERIFICA DI CONDIZIONI
let num1 = 5
let num2 = 10
let num3 = 10

// < > <= >= ===
console.log(num1 < num2) // (5 < 10) --> true
console.log(num1 <= num2) // (5 <= 10) --> true
console.log(num1 > num2) // (5 > 10) --> false

console.log(num1 === num2) // (5 === 10) --> false
// == vs ===
console.log(10 == '10') // true, è un orrore!
console.log(10 === '10') // false, come è giusto che sia!

// = -> operatore di assegnazione di un valore
// === -> operatore di COMPARAZIONE relativo all'UGUAGLIANZA

console.log(num2 <= num3) // true :)

// OPERATORI LOGICI
// && <-- AND
// || <-- OR
// ! <-- NOT
// il punto esclamativo RIBALTA un valore booleano!

console.log(!(num2 <= num3)) // !(10 <= 10) --> false

console.log(num2 === num3) // "num2 è uguale a num3" --> true
console.log(num2 !== num3) // "num2 è DIVERSO da num3" --> false
// !== è l'opposto di ===
console.log(!(num2 !== num3)) // !("num2 è DIVERSO da num3") --> true

// gli operatori logici si utilizzano quando si vogliono concatenare
// PIÙ ESPRESSIONI all'interno di un'unica espressione

let numm1 = 5
let numm2 = 10
let numm3 = 10

console.log(numm1 < numm2) // <-- true
console.log(numm1 < numm2 && numm2 <= numm3) // true && true --> true
console.log(numm1 < numm2 && numm2 > numm3) // true && false --> false
// l'operatore AND applicato su due condizioni tornerà true solamente
// se ENTRAMBE LE PARTI hanno valore di true

console.log(numm1 < numm2 || numm2 <= numm3) // true || true --> true
console.log(numm1 < numm2 || numm2 > numm3) // true || false --> true
console.log(numm1 > numm2 || numm2 > numm3) // false || false --> false
// l'operatore OR applicato su due condizioni tornerà false solamente
// se ENTRAMBE LE PARTI hanno valore di false

// OPERATORE TERNARIO
// dovete assegnare il valore ad una variabile in base ad una condizione:

const myAge = 19

let canIDrive = myAge >= 18 ? true : false
// in questo canIDrive ha assunto il valore di true

const isTodayBlackFriday = true

const discount = isTodayBlackFriday ? '20%' : '0%'
// discount ha assunto il valore di "20%"
