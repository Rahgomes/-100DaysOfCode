window.addEventListener('load', () => {
    const url = 'https://reqres.in/api/unknown'

    doPromiseFetch(url);
    doAsyncFetch(url);
})

function doPromiseFetch(url){
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        const nameUser = res.data;
        for(let i = 0; i < nameUser.length; i++){
            console.log(nameUser[i].name);
        }
        console.log('-------------------------');
    })
}

async function doAsyncFetch(url){
    const res = await fetch(url);
    const json = await res.json();
    const nameUser = await json.data;

    for(let i = 0; i < nameUser.length; i++){
        console.log(nameUser[i].name);    
    }
    
}