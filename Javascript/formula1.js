document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') {
        window.location.href = 'index.html'
    }
})

function procurarPiloto(nomePiloto){

    fetch('https://raw.githubusercontent.com/GuilhSchneider/JSON-das-API/refs/heads/main/formula1.json').then(reposta => reposta.json()).then(corpo => {
        var encontrado = false

        corpo.forEach(piloto => {
            if(nomePiloto === piloto.nome){
                document.getElementById('nome').innerHTML = "Nome: " + piloto.nome
                document.getElementById('idade').innerHTML = "Idade: " + piloto.idade + " Anos"
                document.getElementById('nacionalidade').innerHTML = "Nacionalidade: " + piloto.nacionalidade
                document.getElementById('historia').innerHTML = "Historia: " + piloto.historia              
                document.getElementById('imagem').innerHTML = piloto.imagem
    
                encontrado = true
            }
    
    
        })

    })
}