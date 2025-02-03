const endpoint = 'https://lanciweb.github.io/demo/api/pictures/' // URL dell'API contenente le immagini
const methodFetch = { method: 'GET' } // Metodo HTTP GET per recuperare i dati dall'API

// Seleziona gli elementi della modale
const modale = document.querySelector('.modale') // Contenitore della modale
const modaleImg = document.querySelector('.modale img') // Immagine all'interno della modale
const btnClose = document.querySelector('#btn-close') // Bottone per chiudere la modale

// Effettua una richiesta HTTP GET all'API per ottenere un elenco di immagini
fetch(endpoint, methodFetch)
    .then(response => response.json()) // Converte la risposta in JSON
    .then(data => { // Funzione che gestisce i dati ricevuti
        console.log(data); // Debug: stampa i dati ricevuti

        let arrayCards = [] // Array vuoto per contenere le card

        // Cicla su ogni elemento dell'array di immagini ricevuto dall'API
        data.forEach(element => {
            console.log(element); // Debug: stampa l'elemento corrente

            // Destructuring dell'oggetto ricevuto dall'API
            const { date, id, title, url } = element

            // Aggiunge una nuova card alla lista nel DOM
            document.querySelector('#card-list').innerHTML +=
                `
                <div class="cards" data-id='${id}'>
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

            // Aggiorna la lista delle card
            arrayCards = document.querySelectorAll('.cards')
        });

        console.log(arrayCards) // Debug: stampa l'array delle card

        // Aggiunge un evento click a ciascuna card per aprire la modale
        arrayCards.forEach(element => {
            element.addEventListener('click', function () {
                modale.style.display = "flex"; // Mostra la modale
                // Imposta l'immagine nella modale con il percorso corretto
                modaleImg.setAttribute('src', `https://marcolanci.it/boolean/assets/pictures/${element.getAttribute(`data-id`)}.png`)
            });
        });

        // Evento per chiudere la modale cliccando sul bottone di chiusura
        btnClose.addEventListener('click', function (e){
            e.preventDefault();
            btnClose.classList.add('animate'); // Aggiunge l'animazione al bottone
            setTimeout(() => {
                modale.style.display = "none"; // Nasconde la modale
            }, 100);

            setTimeout(() => {
                btnClose.classList.remove('animate'); // Rimuove l'animazione
            }, 200);
        })

        // Chiude la modale cliccando fuori dalla stessa
        window.onclick = function (event) {
            if (event.target == modale) {
                modale.style.display = "none"; // Nasconde la modale
            }
        }
    })
    .catch(error => {
        console.error(error); // Debug: stampa eventuali errori nella console
    }); 
