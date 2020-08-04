async function usersGithub(){
    try{
        const url = 'https://api.github.com/users/rahgomes';
        const response = await fetch(url);
        const data = await response.json();
        const {login, avatar_url: avatar, name, blog, public_repos: repositorios } = data;

        usuarioGithub(login, avatar, name, blog, repositorios);
    } catch(err){
        console.log(err);
    }
}

function usuarioGithub(login, avatar, name, blog, repositorios){
    const usuario = document.querySelector('#usuario');
    
    const aperturaDiv = '<div>';
    const conteudoUsuario = `
        <p>Login: ${login}</p>
        <p>Avatar: <img class="avatar" src="${avatar} title="${name}" alt="${name}"></p>
        <p>Site: ${blog}</p>
        <p>Qtd. Repositórios: ${repositorios}</p>
    `;
    const fechamentoDiv = '</div>';

    usuario.innerHTML = aperturaDiv + conteudoUsuario + fechamentoDiv;
}

usersGithub();