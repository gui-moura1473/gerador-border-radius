//Selecionando elementos no DOM
const borderValue1 = document.querySelector('#border-value1');
const borderValue2 = document.querySelector('#border-value2');
const borderValue3 = document.querySelector('#border-value3');
const borderValue4 = document.querySelector('#border-value4');
const borderValue5 = document.querySelector('#border-value5');
const borderValue6 = document.querySelector('#border-value6');
const borderValue7 = document.querySelector('#border-value7');
const borderValue8 = document.querySelector('#border-value8');

const box = document.querySelector('#box');
const sideBoxes = document.querySelector('#side-boxes');
const checkboxesSuperiores = document.querySelector('.box-toggle-up');
const checkboxesInferiores = document.querySelector('.box-toggle-down');

const width = document.querySelector('#box-width');
const height = document.querySelector('#box-height');
const label = document.querySelector('#label-box');
const select = document.querySelector('#type-border');
const copyBox = document.querySelector('#code-text');
const copyText = document.querySelector('#copy-text');

let valor1 = 0, valor2 = 0, valor3 = 0, valor4 = 0, valor5 = 0, valor6 = 0, valor7 = 0, valor8 = 0;
let sintax = '';

// Adicionando Funções
const desenhaBox = () => {
    let boxWidth = width.value;
    let boxHeight = height.value;

    if (boxWidth <= 100 || boxHeight <= 100) {
        label.style.display = 'none';
    } else {
        label.style.display = 'block';
    }

    if (boxHeight < 100) {
        boxHeight = '100';
    } else if (boxHeight > 800) {
        boxHeight = '800';
    }
    if (boxWidth < 100) {
        boxWidth = '100';
    } else if (boxWidth > 800) {
        boxWidth = '800';
    }

    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;

}

desenhaBox()

const atualizaBordas = () => {
    if (select.value === 'border') {
        box.style.borderRadius = `${valor1}px ${valor2}px ${valor3}px ${valor4}px`;
        sintax = `border-radius: ${valor1}px ${valor2}px ${valor3}px ${valor4}px;`;
        copyBox.value = sintax;
    } else if (select.value === 'complex-border') {
        box.style.borderRadius = `${valor1}px ${valor2}px ${valor3}px ${valor4}px / ${valor5}px ${valor6}px ${valor8}px ${valor7}px`;
        sintax = `border-radius: ${valor1}px ${valor2}px ${valor3}px ${valor4}px / ${valor5}px ${valor6}px ${valor8}px ${valor7}px;`;
        copyBox.value = sintax;
    }
}

const copiaCodigo = () => {
    if(sintax != '') {
        navigator.clipboard.writeText(sintax);
        alert('Copiado com sucesso!');
    } else {
        alert('Não há nada para copiar!');
    }
}
    

// Adicionando Eventos

copyBox.addEventListener('click', (e) =>{
    copiaCodigo();
})

sideBoxes.addEventListener('input', (e) => {
    let targetEl = e.target

    if (targetEl.id === 'border-value1'){
        valor1 = targetEl.value;
        if (valor5 == 0) {
            valor5 = valor1;
        }
    }
    if (targetEl.id === 'border-value2'){
        valor2 = targetEl.value;
    }
    if (targetEl.id === 'border-value3'){
        valor3 = targetEl.value;
    }
    if (targetEl.id === 'border-value4'){
        valor4 = targetEl.value;
    }

    atualizaBordas();

})

checkboxesSuperiores.addEventListener('input', (e) => {
    let targetEl = e.target;

    if (targetEl.id === 'border-value5'){
        valor5 = targetEl.value;
    }
    if (targetEl.id === 'border-value6'){
        valor6 = targetEl.value;
    }

    atualizaBordas();
})

checkboxesInferiores.addEventListener('input', (e) => {
    let targetEl = e.target;

    if (targetEl.id === 'border-value7'){
        valor7 = targetEl.value;
    }
    if (targetEl.id === 'border-value8'){
        valor8 = targetEl.value;
    }

    atualizaBordas();
})

select.addEventListener('change', (e) => {
    if(select.value === 'border') {
        checkboxesSuperiores.classList.toggle('hide');
        checkboxesInferiores.classList.toggle('hide');
        atualizaBordas()
    } else if (select.value === 'complex-border') {
        checkboxesSuperiores.classList.toggle('hide');
        checkboxesInferiores.classList.toggle('hide');
        atualizaBordas();
    }
})

width.addEventListener('input', (e) => {
    desenhaBox();
})

height.addEventListener('input', (e) => {
    desenhaBox();
})

function selecionaValorInput (arrayInputs) {
    arrayInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.select();
        })
    })
}

const arrayInputs = [
    borderValue1,
    borderValue2, 
    borderValue3, 
    borderValue4, 
    borderValue5,
    borderValue6,
    borderValue7,
    borderValue8,
    height,
    width
]

selecionaValorInput(arrayInputs);

