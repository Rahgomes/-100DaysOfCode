window.addEventListener('load', start);

function start() {
    var nameInput = document.querySelector('#nameInput')
    nameInput.addEventListener('keyup', contadorInput)
    var form = document.querySelector('form')
    form.addEventListener('submit', submitForm)    
}

function contadorInput(e){
    
    
    var count = e.target.value;
    var nameLength = document.querySelector('#nameLength')
    
    nameLength.textContent = count.length
}

function submitForm(e){
    e.preventDefault()

    var nameInput = document.querySelector('#nameInput')
    alert(nameInput.value + " Cadastrado com sucesso")
}