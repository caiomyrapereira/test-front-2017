
function slideMover(){
    const $buttons = [...doc.querySelector('.indicators_button').children];
    
    $buttons.forEach((element,index, arr)=>{
        element.addEventListener('click',()=>{
            nextSlider(index, element, arr);
        });
    });
};