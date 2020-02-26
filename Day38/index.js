const numMedia = document.querySelectorAll('input[type=number]');
const arrMedia = Array.from(numMedia)
const imprimeMedia = document.querySelector('#media');

const submitForm = document.querySelector('form');

submitForm.addEventListener('submit', calcMedia);

function calcMedia(e) {
    e.preventDefault();

    let valorDigitado = valor => parseFloat(valor.value);

    let resultadoMedia = arrMedia.map(valorDigitado).reduce(function(acumulador, atual){
        return acumulador + atual
    })

    imprimeMedia.innerHTML = resultadoMedia / arrMedia.length;
}





