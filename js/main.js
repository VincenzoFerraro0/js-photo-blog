// Effettua una richiesta HTTP GET all'API per ottenere un elenco di immagini

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json()) // Converte la risposta in formato JSON
    .then(data => { // Una volta ottenuti i dati, esegue questa funzione

        console.log(data); // Stampa i dati ricevuti nella console per il debug

        // Itera su ogni elemento (oggetto ) ricevuto dall'API
        data.forEach(element => {
            console.log(element); // Stampa l'elemento corrente nella console per il debug

            // Seleziona il contenitore con id 'card-list' e aggiunge una nuova card con i dati dell'elemento
            document.querySelector('#card-list').innerHTML +=
                `
                <div class="recipe-card">
                    <figure class="pin">
                        <img src="./img/pin.svg" alt="Pin">
                    </figure>
                    <div class="col">
                        <figure>
                            <img src="${element.url}" alt="${element.title}">
                        </figure>
                        <span class="data">${element.date}</span>   
                        <span class="title">${element.title}</span>
                    </div>
                </div>
            `;
        });

    })
    .catch(error => {
        // Se si verifica un errore nella richiesta, viene catturato e stampato nella console
        console.error(error);
    });
