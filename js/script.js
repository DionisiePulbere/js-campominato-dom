// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. ✔️
// Ogni cella ha un numero progressivo, da 1 a 100. ✔️
// Ci saranno quindi 10 caselle per ognuna delle 10 righe. ✔️
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
// un messaggio in console con il numero della cella cliccata. ✔️

// nome repo: js-campominato-dom
// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
// - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. ✔️
// - Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle 
//   bombe non potranno esserci due numeri uguali. ✔️
// In seguito l'utente clicca su una cella: 
// - se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
//   la cella si colora di rosso e la partita termina. ✔️
// - Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. ✔️
// - La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile 
//   di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente 
// ha cliccato su una cella che non era una bomba.

// Seleziono il bottone al qaule attribuire l'evento "click"
const playButton = document.querySelector("#play");
playButton.addEventListener("click", function(){

    // genero una costante che va a leggere il valore della select
    const level = document.querySelector("#level").value;

    // stabilisco 2 variabili fuori dal if per definire numero di square 
    let levelChoice = 0 ;
    let levelSquare = "";
    if (level === "easy"){
        levelChoice = 100 ;
        levelSquare = "easy-square";
    } else if (level === "medium"){
        levelChoice = 81 ;
        levelSquare = "medium-square";
    } else if (level === "hard"){
        levelChoice = 49 ;
        levelSquare = "hard-square";
    }
    
    // Inserisco le classi all'interno del box 
    const box = document.querySelector("#box");
    box.innerHTML = "";
    box.classList.add('container');
    box.classList.add('ms-container');
    box.classList.add('flex-wrap');
    box.classList.add('d-flex');

    // Genero un ciclo per creare x qaudrati nel DOM
    for(let i = 1; i <= levelChoice; i++) {
        const newSquare = generateSquare(i);
        box.append(newSquare);
    }
    // 
    const randArray = generateRandomBomb(16, 1 , levelChoice);
    console.log(randArray);
    // funzione per generare in modo random le bombe 
    function generateRandomBomb(arrayLenght, numMin, numMax) {
        // numeri bomba all'interno di un'arrey 
        const generateRandomBomb = [];
        while(generateRandomBomb.length < arrayLenght) {
            const randomNum = getRndInteger(numMin, numMax);
            if (!generateRandomBomb.includes(randomNum)) {
                generateRandomBomb.push(randomNum);
            }
        }
        return generateRandomBomb;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    // Funzione che genera un quadrato
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add(levelSquare);
        newSquare.classList.add('d-flex')
        newSquare.classList.add('justify-content-center')
        newSquare.classList.add('align-items-center')
        newSquare.innerHTML = `<span>${number}</span>`;

        // Gestione del click su ogni qudrato
        newSquare.addEventListener('click', function() {
            if (randArray.includes(number)){
                newSquare.classList.add("red");
                alert("Hai trovato una bomba, hai perso");
            } else{
                newSquare.classList.add("azzurro");
            }
        });
    
        return newSquare;
    }
});



    


// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Trovate allegato gli screenshot con e senza bonus e il logo da usare nell'header.

