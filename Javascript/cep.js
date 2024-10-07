document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') {
        window.location.href = 'index.html'
    }
})

//Preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {
    document.getElementById('inputRua').value = endereco.logradouro
    document.getElementById('inputBairro').value = endereco.bairro
    document.getElementById('inputCidade').value = endereco.localidade
    document.getElementById('inputEstado').value = endereco.uf
}
//Autopreenchimento
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return false;
    }
}

//Buscar API
const pesquisarCep = async () => {
    const cep = document.getElementById('inputCep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        preencherFormulario(endereco);
    }
}
document.getElementById('inputCep').addEventListener('focusout', pesquisarCep)