document.querySelector('#card-list')


fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {

        console.log(data)

        data.forEach(element => {
            console.log(element)

            document.querySelector('#card-list').innerHTML +=
            `
                <div  class="recipe-card">
                    <figure class="pin">
                        <img width="35px" src="./img/pin.svg" alt="">
                    </figure>
                    <div class="col">
                        <figure>
                            <img src="${element.url}" alt="">
                        </figure>
                        <span>${element.title}</span>
                        <span>${element.data}</span>
                        
                    </div>
                </div>
            
            `
        });



    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });

