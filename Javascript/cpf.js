document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') {
        window.location.href = 'index.html'
    }
})

function buscar() {
    fetch('https://raw.githubusercontent.com/GuilhSchneider/JSON-das-API/refs/heads/main/dadosCPF.json').then(reposta => reposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value
        var encontrado = false

        corpo.forEach(pessoa => {
            if (identificador == pessoa.cpf) {

                document.getElementById('nomeCompleto').innerHTML = "Nome: " + pessoa.nomeCompleto
                document.getElementById('pais').innerHTML = "País: " + pessoa.pais
                document.getElementById('cidade').innerHTML = "Cidade: " + pessoa.cidade
                document.getElementById('profissao').innerHTML = "Profissão: " + pessoa.profissao
                document.getElementById('imagem').innerHTML = pessoa.imagem
                document.getElementById('carregar').innerHTML = ""
                document.getElementById('erro').innerHTML = ""                

                encontrado = true

            }
            if (!encontrado) {
                document.getElementById('erro').innerHTML = "Registro Inválido"
                document.getElementById('imagem').innerHTML = ""
                document.getElementById('nomeCompleto').innerHTML = ""
                document.getElementById('cidade').innerHTML = ""
                document.getElementById('pais').innerHTML = ""
                document.getElementById('profissao').innerHTML = ""
                document.getElementById('carregar').innerHTML = "Carregando..."
                
            }
        })
    })
}