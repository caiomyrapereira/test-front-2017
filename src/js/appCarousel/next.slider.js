
function nextSlider( page, button, buttons ){
    const $sliders = [...doc.querySelectorAll('.carousel-inner')];
    const $indicator = doc.querySelector('.indicators');
    
    //close current
    $sliders.forEach( ( slider, index)=>{
        if(!slider.classList.contains('none')){
            slider.classList.add('none');
            buttons[index].style.background = '#3bafbe';
        }
    } );

    //next slider
    button.style.background = 'white';
    $sliders[page].classList.remove('none');
    $sliders[page].appendChild($indicator);
}