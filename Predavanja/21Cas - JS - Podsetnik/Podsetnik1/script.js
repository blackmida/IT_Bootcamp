let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(el => {
    el.addEventListener('dblclick', () => {
        if (el.style.textDecoration == 'line-through') {
            el.style.textDecoration = 'none';
            el.style.opacity = '1';
        }
        else {
            el.style.textDecoration = 'line-through';
            el.style.opacity = '0.7';
        }
    });
});