//seleziono campi input

const kmsField = parseFloat(document.getElementById("kms-field").value);
console.log(kmsField); //kms percorsi da utente puo essere un numero con la virgola

const ageField =parseInt(document.getElementById("age-field").value);
console.log(ageField); //eta utente puo essere solo un numero intero

//seleziono il form

const form = document.querySelector('form');

//elaborazione

form.addEventListener('submit', (e) => {
    e.preventDefault() //blocco comportamento base del form
})

console.log('hai inviato il form');

//calcolo il prezzo base

const eurosPerKm = 0.21;
let tripPrice = kmsField * eurosPerKm;

//applico la logica degli sconti

if (ageField < 18) {
    tripPrice = tripPrice * 0.80; // semplificazione del calcolo perche uno sconto del 20% rappresneta l'80% del prezzo totale e 80/100 = 0.8
    //console.log("l'utente é minorenne");    
} else if (ageField >= 65) {
    tripPrice = tripPrice * 0.60; // semplificazione del calcolo perche uno sconto del 40% rappresneta il 60% del prezzo totale e 60/100 = 0.6
    //console.log("l'utente é senior");
}

//formatto il prezzo a 2 cifre dopo la virgola

const finalPrice = tripPrice.toFixed(2)

//stampo il risultato in console

console.log(`la informiamo che il costo del suo biglietto é € ${finalPrice}`);
//risulato stampato e visibile in pagina
document.body.innerHTML = `<h2>la informiamo che il costo del suo biglietto é € ${finalPrice}</h2>`;









/*
//DATI eta, kms, prezzo per kms

//INPUT dichiarazione eta e kms percorsi

//ELABORAZIONE se l'user é minorenne applico il 20% di sconto, se l'user é senior applico il 40% di sconto

//OUTPUT prezzo finale, con due decimali (float) considerando etá e kms
*/