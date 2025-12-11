//seleziono la card di recap

const recap = document.querySelector(".recap")
console.log(recap);

//seleziono il form

const form = document.querySelector('form');

//elaborazione

form.addEventListener('submit', (e) => {
    e.preventDefault() //blocco comportamento base del form

    //console.log("submit") //check evento submit

    //seleziono campi input

    const kmsField = parseFloat(document.getElementById("kms-field").value); //kms percorsi da utente puo essere un numero con la virgola
    const ageField = parseInt(document.getElementById("age-field").value); //eta utente puo essere solo un numero intero
    //console.log(kmsField);
    //console.log(ageField);

    //invoco le fuzione

    ticketPrice(kmsField, ageField)

    discountMsg(ageField)

    //seleziono elementi pagina relativi ai campi

    const mykms = document.getElementById("mykms");
    const myage = document.getElementById("myage");
    const mydiscount = document.getElementById("mydiscount")
    const myprice = document.getElementById("myprice");

    //elaborazione output

    mykms.innerText = kmsField;
    myage.innerText = ageField;
    mydiscount.innerText = discountMsg(ageField)
    myprice.innerText = ticketPrice(kmsField, ageField);

    //gestione visibilita card recap

    recap.classList.remove("hidden");

    // form reset

    form.reset();
})

//funzione

function ticketPrice(kms, age) {
    //calcolo il prezzo base

    const eurosPerKm = 0.21;
    let tripPrice = kms * eurosPerKm;

    //applico la logica degli sconti

    if (age < 18) {
        tripPrice = tripPrice * 0.80; // semplificazione del calcolo perche uno sconto del 20% rappresneta l'80% del prezzo totale e 80/100 = 0.8
        //console.log("l'utente é minorenne");
    } else if (age >= 65) {
        tripPrice = tripPrice * 0.60; // semplificazione del calcolo perche uno sconto del 40% rappresneta il 60% del prezzo totale e 60/100 = 0.6
        //console.log("l'utente é senior");
    }

    //formatto il prezzo a 2 cifre dopo la virgola

    const finalPrice = tripPrice.toFixed(2)

    //stampo il risultato in console

    console.log(`la informiamo che il costo del suo biglietto é € ${finalPrice}`);

    return finalPrice
}

function discountMsg(age) {

    let message = ''

    if (age < 18) {
        message = '20% passeggiero minorenne'
    } else if (age >= 64) {
        message = '40% passeggiero over65'
    } else {
        message = 'nessuno passeggiero standard'
    }

    console.log(message);

    return message
}