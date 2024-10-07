document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') {
        window.location.href = 'index.html'
    }
})

async function getWeather() {
    var cidade = document.getElementById('inputCity').value

    //Pegar API de tempo
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Pegar dado especifico
    var tempCelsius = resposta.data.main.temp;

    //Levar para o Front End
    document.getElementById('temperatura').innerHTML = `A temperatura de ${cidade} é: ${tempCelsius.toFixed(2)} °C`

    if (cidade == "Palmeiras" || cidade == "palmeiras" || cidade == "Palmeira" || cidade == "palmeira") {
        document.getElementById('semMundial').innerHTML = `E o ${cidade} é sem Mundial`
    } else {
        document.getElementById('semMundial').innerHTML = ``
    }
}

//Chamar a função
getWeather();