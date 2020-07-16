window.addEventListener('load', () => {
    let slider = document.querySelector('[data-slider]');
    let count = 1;
    
    const sliderInterval = setInterval(() => {
        if(count === 4){
            count = 1;
        }
        slider.setAttribute('src', `img-0${count++}.jpg`);
    }, 2000);
})