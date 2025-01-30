const endpoint = 'https://lanciweb.github.io/demo/api/pictures/' // Dichiaro una variabile che corrisponde al l'indirizzo dell' api 
const methodFetch = { method: 'GET' } // dichiaro una variabile che corrisponde method: 'GET'

// Effettua una richiesta HTTP GET all'API per ottenere un elenco di immagini
fetch(endpoint, methodFetch)
    .then(response => response.json()) // Converte la risposta in formato JSON
    .then(data => { // Una volta ottenuti i dati, esegue questa funzione

        console.log(data); // Stampa i dati ricevuti nella console per il debug

        
        // Itera su ogni elemento (oggetto ) ricevuto dall'API
        data.forEach(element => {
            console.log(element); // Stampa l'elemento corrente nella console per il debug

            //Destructuring
            const {date, id, title, url } = element

            // Seleziona il contenitore con id 'card-list' e aggiunge una nuova card con i dati dell'elemento
            document.querySelector('#card-list').innerHTML +=
                `
                <div class="cards">
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
        });
    })
    
    
    .catch(error => {
        // Se si verifica un errore nella richiesta, viene catturato e stampato nella console
        console.error(error);
    });

    
