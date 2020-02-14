window.addEventListener('load', function(){
    const entrada = document.querySelector('#dados-entrada')
    const form = document.querySelector('#form')
    const saida = document.querySelector('.output')    

    form.addEventListener('submit', function(e){
        e.preventDefault()
        
        tratamentoDados()
    })

    function tratamentoDados() {
        const textoDigitado = []

        textoDigitado.push(entrada.value)

        textoDigitado.forEach(texto => saida.innerHTML = `O texto de saída é o: ${texto}`)
    }
})