// Inizializzazione delle variabili

const userName = prompt('Inserisci il tuo nome');

const userLastName = prompt('Inserisci il tuo cognome');

const userFavoriteColour = prompt('Inserisci il tuo colore preferito');

let currentYear = 2022;

// Verifica su console dei dati assegnati

console.log(userName, userLastName, userFavoriteColour, currentYear);

// Scrittura su pagina browser

document.getElementById('userName').innerHTML = userName;

document.getElementById('userLastName').innerHTML = userLastName;

document.getElementById('userFavoriteColour').innerHTML = userFavoriteColour;

document.getElementById('currentYear').innerHTML = currentYear;

document.getElementById('password').innerHTML = userName + userLastName + userFavoriteColour + "22";
