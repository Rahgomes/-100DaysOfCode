(function(){
    const entrada = document.querySelector('#dados-entrada')
    const form = document.querySelector('#form')
    const saida = document.querySelector('.output')    

    form.addEventListener('submit', function(e){
        e.preventDefault()
        
        tratamentoDados()
    })

    function tratamentoDados() {
        let dadosEntrada = entrada.value

        let dadosArray = dadosEntrada.split(' ')

        dadosArray.forEach(dado => saida.innerHTML += `${dado} <br>`)
    }
})()