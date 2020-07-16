window.addEventListener('load', function(){
    const url = 'https://api.github.com/users/rrgomide';
    
    fetch(url).then((res) => {
        res.json().then(data => {
            showData(data);
        })
    })
})

function showData(data){
    const user = document.querySelector('#user');

    user.textContent = `${data.login}  ${data.name}`;
}