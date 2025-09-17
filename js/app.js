let amigos = [];

function adicionar() {

    /* Recuperando os dados */

    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigo = document.getElementById('lista-amigos');

    /* Validação do campo nome */

    if(nomeAmigo.value == '') {
        alert('Infome o nome do participante!');
        return;
    } 

    /* Validação se o nome já existe */

    if(amigos.includes(nomeAmigo.value)) {
        alert('Participante já adicionado!');
        return;
    } 

    /* Enviando para o array */

    amigos.push(nomeAmigo.value);

    /* Validação do nome na lista de amigos */

    if(listaAmigo.textContent == '') {
        listaAmigo.textContent = nomeAmigo.value;
    } else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + nomeAmigo.value;
    }

    /* Limpando campo após adiconar na lista */

    nomeAmigo.value = '';

}

function sortear() {

    /* Validação da quantidade de participantes */

    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 participantes!');
        return;
    } 

    embaralhar(amigos);
    let listaSrteio = document.getElementById('lista-sorteio');

    for(i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            listaSrteio.innerHTML = listaSrteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            listaSrteio.innerHTML = listaSrteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(listaAmigo) {
    for (let indice = listaAmigo.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaAmigo[indice - 1], listaAmigo[indiceAleatorio]] = [listaAmigo[indiceAleatorio], listaAmigo[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos'). innerHTML = '';
    document.getElementById('lista-sorteio'). innerHTML = '';
}