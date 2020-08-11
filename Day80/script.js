window.addEventListener('load', start);

function start(){    
    const button = document.querySelector('button');
    createItemList(button);
}

function createItemList(button){
    const list = document.querySelector('#lista');
    list.innerHTML = '';
    button.addEventListener('click', () => {
        const listItem = document.createElement('li');
        listItem.innerHTML = getNewTimestamp();
        list.appendChild(listItem);

        // document.title = listItem.length;
    })
}