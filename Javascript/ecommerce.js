document.addEventListener('keydown', function(event){
  if(event.key === 'Escape') {
      window.location.href = 'index.html'
  }
})

fetch('https://raw.githubusercontent.com/GuilhSchneider/JSON-das-API/refs/heads/main/ecommerce.json').then(reposta => reposta.json()).then(corpo => {
    corpo.forEach(produto => {

            document.getElementById('nome').innerHTML = "Fruta: " + produto.nome
            document.getElementById('descricao').innerHTML = "Descrição: " + produto.descricao
            document.getElementById('tipo').innerHTML = "Tipo de Pitaya: " + produto.tipo
            document.getElementById('preco').innerHTML = "Preço: " + produto.preco              
            document.getElementById('imagem').innerHTML = produto.imagem

            document.getElementById('nome2').innerHTML = "Fruta: " + produto.nome
            document.getElementById('descricao2').innerHTML = "Descrição: " + produto.descricao
            document.getElementById('tipo2').innerHTML = "Tipo de Pitaya: " + produto.tipo
            document.getElementById('preco2').innerHTML = "Preço: " + produto.preco              
            document.getElementById('imagem2').innerHTML = produto.imagem

            document.getElementById('nome3').innerHTML = "Fruta: " + produto.nome
            document.getElementById('descricao3').innerHTML = "Descrição: " + produto.descricao
            document.getElementById('tipo3').innerHTML = "Tipo de Pitaya: " + produto.tipo
            document.getElementById('preco3').innerHTML = "Preço: " + produto.preco              
            document.getElementById('imagem3').innerHTML = produto.imagem
          })
})

function comprou(){
    Swal.fire({
      title: "Compra Realizada",
      text: "Compra realizada com sucesso",
      icon: "success"
    })
}