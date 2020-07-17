window.addEventListener('load', function () {
    const url = 'https://api.github.com/users/rrgomide';

    doFetch(url);
    doFetchAsync(url);

    executeDivisionPromise();
    executeDivisionPromiseAsyncAwait();
})

function doFetch(url){
    fetch(url).then((res) => {
        res.json().then(data => {
            showData(data);
        })
    })
        .catch(error => {
            showError(error);
        })
}

async function doFetchAsync(url){
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
}

function showData(data) {
    const user = document.querySelector('#user');

    user.textContent = `${data.login}  ${data.name}`;
}


function showError(error) {
    const user = document.querySelector('#user');

    user.textContent = 'Erro na requisição com o github';
}


function divisionPromisse(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Não é possível dividir por 0');
        }

        resolve(a / b);
    })
}

function executeDivisionPromise() {
    divisionPromisse(10, 5).then(result => {
        console.log(result);
    })

    divisionPromisse(10, 0).then(result => {
        console.log(result);
    }).catch(errorMessage => {
        console.log('Falha na divisão');
    })
}

async function executeDivisionPromiseAsyncAwait() {
    const division = await divisionPromisse(10, 5);
    console.log(division);

    const divisionZero = await divisionPromisse(10,0);
    console.log(divisionZero);
}