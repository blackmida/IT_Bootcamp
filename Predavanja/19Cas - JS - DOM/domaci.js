let imena = ['Marko', 'Janko', 'Stanko', 'Pera', 'Zika'];

let listItems = document.querySelectorAll('li');

// for(let i = 0; i<imena.length; i++){
//     listItems[i].innerText=imena[i];
// };

imena.forEach((el, i) => {
    listItems[i].innerText = el;
});