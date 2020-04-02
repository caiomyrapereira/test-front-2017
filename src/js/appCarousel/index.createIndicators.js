
function createIndicators(){
    const $fragment = document.createDocumentFragment();
    const $carousel_inner = doc.querySelector('.carousel-inner');
    const $indicators = doc.createElement('div');
    const length = doc.querySelectorAll('.carousel-inner').length - 1;
    const innerHTMLIndicators =  `
    <div class="indicators_button">
        <div style='background-color:white;' ></div>
        ${ ('<div></div>').repeat(length) }
    </div>
`;

    $indicators.className = 'indicators';
    $indicators.innerHTML =  innerHTMLIndicators;
    $fragment.appendChild($indicators);
    $carousel_inner.appendChild($fragment);
};