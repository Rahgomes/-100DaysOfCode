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

        let dadosSet = new Set(dadosEntrada.split(' '))

        dadosSet.forEach(dado => saida.innerHTML += `${dado} <br>`)
    }
})()