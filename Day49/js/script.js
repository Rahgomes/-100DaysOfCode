window.addEventListener('load', start);

function start() {
    changeRange();
    listenChangeRange();
}

function changeRange() {
    var rangeRed = document.querySelector('#rangeRed'),
        rangeGreen = document.querySelector('#rangeGreen'),
        rangeBlue = document.querySelector('#rangeBlue'),
        inputRed = document.querySelector('#inputRed'),
        inputGreen = document.querySelector('#inputGreen'),
        inputBlue = document.querySelector('#inputBlue'),
        boxRGB = document.querySelector('#boxRGB'),
        bgColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;

    boxRGB.style.background = bgColor;

    createRange(rangeRed, 'input', inputRed);
    createRange(rangeGreen, 'input', inputGreen);
    createRange(rangeBlue, 'input', inputBlue);
}

function listenChangeRange(){
    document.querySelector('#rangeRed').addEventListener('input', changeRange)
    document.querySelector('#rangeGreen').addEventListener('input', changeRange)
    document.querySelector('#rangeBlue').addEventListener('input', changeRange)
}

function createRange(rangeName, eventType, inputValueName) {
    rangeName.addEventListener(eventType, event => {
        var count0To255 = event.target.value;
        inputValueName.value = count0To255;
    })
}