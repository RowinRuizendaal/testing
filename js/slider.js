let state = 'Show';
var section = document.querySelector('.filter form');


function slider() {


    document.querySelector('#Value').textContent = '€ ' + document.querySelector('#prijsrange').value;
}


function Filter() {
    section.classList.toggle('FormActive');


    if (state == 'Hide') {
        document.querySelector('.DuurzaamHeader button').innerHTML = 'Gebruik filter';
        state = 'Show';
    } else {
        document.querySelector('.DuurzaamHeader button').innerHTML = 'Verberg filter';
        state = 'Hide';
    }
    console.log(state);
}

function theme() {
    document.querySelector('body').classList.toggle('donkerThema');
}





document.querySelector('.DuurzaamHeader button').addEventListener('click', Filter);
document.querySelector('#prijsrange').addEventListener('input', slider);