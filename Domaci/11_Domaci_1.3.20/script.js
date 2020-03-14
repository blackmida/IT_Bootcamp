let niz = ['Janko', 'Stanko', 'Pera', 'Zika', 'Mika'];

niz.forEach((el, i) => {
    document.querySelectorAll('li')[i].innerText = el;
});

document.querySelectorAll('.kraj').forEach(el => {
    el.style.color = 'red';
});