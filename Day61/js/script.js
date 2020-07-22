let allUsers = [];
let inputDataSearch = document.querySelector('#inputDataSearch');
let inputBtnDataSearch = document.querySelector('#inputBtnDataSearch');
let titleNoneUser = document.querySelector('#titleNoneUser');
let titleNoneView = document.querySelector('#titleNoneView');
let countUsers = 0;
let tabFilteredUsers = document.querySelector('#tabFilteredUsers');
let tabFilteredStatisticsUsers = document.querySelector('#tabFilteredStatisticsUsers');

window.addEventListener('load', () => {
    fetchApiUsers();
    inputData();
    preventFormSubmit();
    searchData();
})

async function fetchApiUsers() {
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await res.json();
    allUsers = json.results.map(user => {
        const { name, picture, dob, gender } = user;

        return {
            name: `${name.first} ${name.last}`,
            picture: picture.thumbnail,
            dob: dob.age,
            gender
        }
    })
}

function preventFormSubmit() {
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })
}

function inputData() {
    inputDataSearch.addEventListener('input', () => {
        inputDataSearch.value.toLowerCase();
        let qtdDataSearch = inputDataSearch.value.length;

        if (qtdDataSearch !== 0) {
            inputBtnDataSearch.removeAttribute('disabled')
        } else {
            inputBtnDataSearch.setAttribute('disabled', 'disabled')
        }
    })

    clearInput();
}

function clearInput() {
    inputDataSearch.value = '';
    inputDataSearch.focus();
}

function searchData() {
    inputBtnDataSearch.addEventListener('click', () => {
        render();
        clearInput();
    })
}

function render() {
    renderFoundUsers();
    renderStatisticsUsers();
}

function renderFoundUsers() {
    const searchUser = allUsers.filter(user => {
        let valueDataSearch = inputDataSearch.value;
        let userNameLowercase = user.name.toLowerCase();

        return userNameLowercase.indexOf(valueDataSearch) >= 0
    });

    let usersHTML = '<div>';

    searchUser.forEach(user => {
        const { name, picture, dob} = user;

        titleNoneUser.innerHTML = `
                <h2 class="mb-3">
                    <span>${searchUser.length}</span>
                    usuário(s) encontrado(s) para o resultado: ${inputDataSearch.value}
                </h2>
            `;

        const userHTML = `
                <p class="d-flex align-items-center text-primary">
                    <img src="${picture}" title="${name}" alt="${name}" class="rounded-circle pr-2">
                    <span>${name}, </pan>
                    <span>${dob} anos</pan>                
                </p>
            `;
        usersHTML += userHTML;

    })

    usersHTML += '</div>';
    tabFilteredUsers.innerHTML = usersHTML;
}

function renderStatisticsUsers() {
    const searchUser = allUsers.filter(user => {
        let valueDataSearch = inputDataSearch.value;
        let userNameLowercase = user.name.toLowerCase();

        return userNameLowercase.indexOf(valueDataSearch) >= 0
    });

    const genderMasc = searchUser.filter(user => {
        return user.gender === "male";
    });

    const genderFem = searchUser.filter(user => {
        return user.gender === "female";
    });

    const userIdades = searchUser.reduce((accumulate, current) => {
        return accumulate + current.dob;
    }, 0);

    const mediaIdades = userIdades / searchUser.length;

    let statisticsHTML = '<div>';

    titleNoneView.innerHTML = `
        <h2 class="mb-3">
            Estatísticas
        </h2>
    `;

    const statisticHTML = `
        <p class="text-primary">Sexo masculino: <span>${genderMasc.length}</span></p>
        <p class="text-primary">Sexo feminino: <span>${genderFem.length}</span></p>
        <p class="text-primary">Soma das idades: <span>${userIdades}</span></p>
        <p class="text-primary">Média das idades: <span>${mediaIdades}</span></p>
    `;

    statisticsHTML += statisticHTML;
    statisticsHTML += '</div>';
    tabFilteredStatisticsUsers.innerHTML = statisticsHTML;
}