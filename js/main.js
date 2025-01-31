const endpoint = 'https://lanciweb.github.io/demo/api/pictures/' // Dichiara la variabile con l'URL dell'API 
const methodFetch = { method: 'GET' } // Definisce il metodo della richiesta HTTP come GET

// Effettua una richiesta HTTP GET all'API per ottenere un elenco di immagini
fetch(endpoint, methodFetch)
    .then(response => response.json()) // Converte la risposta in formato JSON
    .then(data => { // Una volta ottenuti i dati, esegue questa funzione

        console.log(data); // Stampa i dati ricevuti nella console per il debug

        let arrayCards = [] // Inizializza un array vuoto per contenere le card
   
        // Itera su ogni elemento (oggetto) ricevuto dall'API
        data.forEach(element => {
            console.log(element); // Stampa l'elemento corrente nella console per il debug

            // Destructuring per estrarre le proprietà dell'oggetto
            const { date, id, title, url } = element

            // Seleziona il contenitore con id 'card-list' e aggiunge una nuova card con i dati dell'elemento
            document.querySelector('#card-list').innerHTML +=
                `
                <div class="cards" data-img='${id}'>
                    <figure class="pin">
                        <img src="./img/pin.svg" alt="Pin">
                    </figure>
                    <div class="col">
                        <figure>
                            <img src="${url}" alt="${title}">
                        </figure>
                        <span class="data">${date}</span>   
                        <span class="title">${title}</span>
                    </div>
                </div>
            `;

            // Aggiorna l'array con tutte le card create
            arrayCards = document.querySelectorAll('.cards')
        });

        console.log(arrayCards) // Stampa l'array delle card per il debug

        let modale = document.querySelector('.modale') // Seleziona l'elemento overlay

        // Aggiunge un evento di click a ciascuna card
        arrayCards.forEach(element => {
            element.addEventListener('click', function () {
                let dataImg = this.getAttribute('data-img') // Ottiene l'attributo data-img

                modale.style.display = 'flex' // Mostra l'overlay
                modale.innerHTML =
                `
                    <button id="btn-close" class="btn-bubble">Chiudi</button>
                    <figure>
                        <img src="https://marcolanci.it/boolean/assets/pictures/${dataImg}.png" alt="">
                    </figure>
                `
                
                // Aggiunge un evento per chiudere la modale con il bottone
                let btnClose = document.querySelector('#btn-close')
                btnClose.addEventListener('click', function () {
                    modale.style.display = "none";
                });

                
    
            });
        });



        // Chiude la modale cliccando fuori dalla modale stessa
        window.onclick = function (event) {
            if (event.target == modale) {
                modale.style.display = "none";
            }
        }
    })
    .catch(error => {
        // Se si verifica un errore nella richiesta, viene catturato e stampato nella console
        console.error(error);
    });