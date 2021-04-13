moviesRequest();

function moviesRequest () {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
    request.then(renderWithAnswer);
    request.catch(serverNotfound);
}

function serverNotfound() {
    alert("server not found");
}

function renderWithAnswer(answer) {
    renderMovies(answer.data);
}

function renderMovies(moviesArray) {
    const element = document.querySelector(".movies");
    element.innerHTML = "";
    for (let i = 0 ; i < moviesArray.length; i++ ) {
        element.innerHTML += 
        `<div class="movie"><img src="${moviesArray[i].imagem}"><div class="title">${moviesArray[i].titulo}</div><button onclick="buymovie(${moviesArray[i].id})">Comprar<ion-icon name="cart-outline"></ion-icon></button></div>`;
    }
}

function buymovie(movieID) {
    const buyerName = prompt("Qual o seu nome?");
    const numberOfTickets = parseInt(prompt("Quantos assentos quer comprar?"));
    const chartInfo = {nome: buyerName, quantidade: numberOfTickets};
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${movieID}/ingresso`, chartInfo);
    request.then(successAlert);
    request.catch(errorAlert);
}

function successAlert() {
    alert("Ingressos comprados com sucesso!");
}

function errorAlert() {
    alert("Os ingressos para este filme estão esgotados!");
}


