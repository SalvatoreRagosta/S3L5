/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum = 10 + 20;

console.log(`La somma tra 10 e 20 è ${sum}`);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/ 
var random = Math.floor(Math.random() * 20); 

console.log(`Numero Randomico = ${random}`);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "Salvatore",
  surname: "Ragosta",
  age: 21,
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript","HTML","CSS"];

console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("NuovoElemento");

console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice(){
  var numeroCasuale = Math.floor(Math.random() *6) + 1;
  return numeroCasuale;
}

var risultato = dice();

console.log(`Il numero estratto è ${risultato}`);
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
var num1 = 10;
var num2 = 20;

function whoIsBigger(num1, num2){
  if(num1 > num2) {
    return num1;
  } else{
    return num2;
  }
}

var risultato = whoIsBigger(10, 20)
console.log(`Il numero più grande è il ${risultato}`)
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(inputString){
  var parole = inputString.split(" ");
  return parole;
}

var paroleDivise = splitMe("I Love Coding");

console.log(paroleDivise)
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, booleano){
  
  if(booleano){
    return stringa.substring(1);
  } else{
    return stringa.substring(0, stringa.lenght -1);
  }
}

var risultatoValore = deleteOne("Epicode", true);

console.log(risultatoValore);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(inputString){
  var stringaFinale = inputString.replace(/\d/g, '');

  return stringaFinale;
}

var stringaSoloLettere = onlyLetters("I have 4 dogs");

console.log(stringaSoloLettere);
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email){
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

var controlloEmail = isThisAnEmail("sasyragosta24gmail.com")

console.log(controlloEmail);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  var currentDate = new Date();

  var daysOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

  var currentDayIndex = currentDate.getDay();

  return daysOfWeek[currentDayIndex];
}

var result = whatDayIsIt();
console.log(result); 

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numOfRolls){
  var valoreDice = [];
  var sum = 0;

  for(var i = 0; i < numOfRolls; i++){
    var risultatoDice = dice ();
    valoreDice.push(risultatoDice);
    sum += risultatoDice;
  }

  return{
    sum: sum,
    valore: valoreDice
  }
}

var giri = rollTheDices(4);

console.log(giri)
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(dataInizio) {
  var giornoCorrente = new Date();

  var differenzaDiTempo = giornoCorrente - dataInizio;

  var giorniDiDifferenza = Math.floor(differenzaDiTempo / (1000 * 60 * 60 * 24));

  return giorniDiDifferenza;
}

var dataRiferimento = new Date("2022-11-10");
var differenza = howManyDays(dataRiferimento)

console.log(`Dal giorno ${dataRiferimento} ad oggi, sono passati ${differenza} giorni!`);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(){
  var currentDate = new Date();

  var giornoAttuale = currentDate.getDate();
  var meseAttuale = currentDate.getMonth() + 1;

  var giornoCompleanno = 24;
  var meseCompleanno = 4;

  return giornoAttuale === giornoCompleanno && meseAttuale === meseCompleanno;
}

var result = isTodayMyBirthday();

console.log(result);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(oggetto,proprietàDaEliminare){
  if(proprietàDaEliminare in oggetto){
    delete oggetto[proprietàDaEliminare];
  }
  return oggetto;
}

var studente = {
  name: "Salvatore",
  surname: "Ragosta",
  voti: "bassi"
}

var ogettoAggiornato = deleteProp(studente, "voti");

console.log(ogettoAggiornato);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

/////////  SVOLTO SOTTO L'ARREY  /////////


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  var containerElement = document.getElementById("container");

  return containerElement;
}
var container = selectContainerElement();

console.log(container);


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function SelezionaTutteLeTab(){
  var tabelle = document.querySelectorAll("td");
  return tabelle;
}

var tutteLeTabelle = SelezionaTutteLeTab();

console.log(tutteLeTabelle); 

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampaTutteLeTabelle(){
  var tdElements = document.querySelectorAll("td");
  for(var i = 0; i < tdElements.lenght; i++){
    console.log(tdElements[i].textContent);
  }

}

stampaTutteLeTabelle();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function backgroundRosso(){
  var link = document.querySelectorAll("a");
  link.forEach(function(link){
    link.style.backgroundColor = "red";
  })
}

backgroundRosso();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiElemento(){
  var nuovaLista = document.createElement("li");
  var textNode = document.createTextNode("Nuovo Elemento");
  nuovaLista.appendChild(textNode);

  var lista = document.getElementById("lista")

  lista.appendChild(nuovaLista);
}

aggiungiElemento();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaList() {

  var myList = document.getElementById("myList");

  myList.innerHTML = "";
}

svuotaList();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungiClasse() {
  var trElements = document.querySelectorAll("tr");

  trElements.forEach(function(tr) {
    tr.classList.add("test");
  });
}

aggiungiClasse();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(numero){
  if (numero <= 1){
    return false;
  }

  for(let i = 2; i <= Math.sqrt(numero); i++){
    if(numero % i ===0){
      return false;
    }
  }
  return true;
}

console.log(isItPrime(10));

/* Questo array viene usato per gli esercizi. Non modificarlo. */




const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie (movies){
  movies.sort(function (a, b) {
    return parseInt(b.Year) - parseInt(a.Year);
  });

  return movies[0];
 
}

var filmPiuRecente = newestMovie(movies);


console.log(filmPiuRecente);


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies){
  return movies.lenght;
}

var numeroDiFilm = countMovies(movies);

console.log(numeroDiFilm)

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears (movies){
  var anni = movies.map(function(movie) {
    return movie.Year;
  });

  return anni;
}

var anniFilm = onlyTheYears(movies);
console.log(anniFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  var lastMillenniumMovies = movies.filter(function(movie) {
    return parseInt(movie.Year) >= 2000;
  });

  return lastMillenniumMovies;
}


var lastMillenniumMovies = onlyInLastMillennium(movies);


console.log(lastMillenniumMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies){
  var totaleAnni = movies.reduce(function(sum, movie){
    return sum + parseInt(movie.Year);
  }, 0);
  
  return totaleAnni;
}
var totale = sumAllTheYears(movies)

console.log(`Gli hanni totali di tutti i film sono: ${totale}`);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(searchTerm, movies) {
  var matchingMovies = movies.filter(function(movie) {
    return movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return matchingMovies;
}

var searchTerm = "Lord";
var matchingMovies = searchByTitle(searchTerm, movies);

console.log(matchingMovies); 

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchTerm, movies) {
 
  var result = movies.reduce(function(acc, movie) {
    if (movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
      acc.match.push(movie);
    } else {
      acc.unmatch.push(movie);
    }
    return acc;
  }, { match: [], unmatch: [] });

  return result;
}

var searchTerm = "Lord";
var dividedMovies = searchAndDivide(searchTerm, movies);

console.log(dividedMovies.match);   
console.log(dividedMovies.unmatch); 

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(indexDaRimuovere, movies){
  if(indexDaRimuovere < 0 || indexDaRimuovere >= movies.lenght){
    console.error("Indice Non Valido");
    return movies;
  } 

  var nuovoArray = movies.slice(0, indexDaRimuovere).concat(movies.slice(indexDaRimuovere + 1))
  return nuovoArray;
}

var indexDaRimuovere = 3;
var moviesSenzaIndex = removeIndex(indexDaRimuovere, movies);

console.log(moviesSenzaIndex);