window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName);
    }

    function updateName(newName){
        globalNames[currentIndex] = newName;
    }

    function handleTyping(event) {
        var hasText = !!event.target.value && event.target.value.trim() !== '';

        if(!hasText){
            clearInput();
            return;
        }
        
        if (event.key === "Enter") {
            if (isEditing) {
                updateName(event.target.value);
            } else {
                insertName(event.target.value);
            }

            render();
            isEditing = false;
            clearInput();
        }
    }

    inputName.addEventListener('keyup', handleTyping);
    inputName.focus();
}

function render() {
    var divNames = document.querySelector('#names');

    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for (var i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];

        function createDeleteButton(index) {
            function deleteName() {
                globalNames.splice(index, 1);
                render();
            }
            var button = document.createElement('button');
            button.textContent = 'X';
            button.classList.add('deleteButton')
            button.addEventListener('click', deleteName);
            return button;
        }

        function createSpan(name, index) {
            function editItem() {
                inputName.value = name;
                inputName.focus();
                isEditing = true;
                currentIndex = index;
            }

            var span = document.createElement('span');
            span.textContent = name;
            span.classList.add('clickable');
            span.addEventListener('click', editItem);

            return span;
        }

        var li = document.createElement('li');

        var button = createDeleteButton(i);
        li.appendChild(button);

        var span = createSpan(currentName, i);
        li.appendChild(span);

        ul.appendChild(li);
    }

    divNames.appendChild(ul);

    clearInput();
}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}