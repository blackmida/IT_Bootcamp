let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.style.textDecoration == 'line-through') {
            e.target.style.textDecoration = 'none';
        }
        else {
            e.target.style.textDecoration = 'line-through';
        }
    });
});