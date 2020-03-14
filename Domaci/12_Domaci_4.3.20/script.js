let knjiga1 = {
    nazivKnjige: 'Lovac na zmajeve',
    autor: 'Haled Hoseini',
    cover: 'img/1.png',
    statusCitanja: false
};

let knjiga2 = {
    nazivKnjige: 'Harry Potter',
    autor: 'J.K.Rowling',
    cover: 'img/2.png',
    statusCitanja: true
};

let knjiga3 = {
    nazivKnjige: 'Godina prodje, dan nikada',
    autor: 'Zarko Lausevic',
    cover: 'img/3.png',
    statusCitanja: false
};

let knjige = [knjiga1, knjiga2, knjiga3];

let table = document.createElement("table");

knjige.forEach(el => {
    table.innerHTML += `<tr>
    <td><img src='${el.cover}'></td>
    <td><p>${el.nazivKnjige}<br>${el.autor}</p></td>
    </tr>`;
});
document.body.appendChild(table);


// Bojenje u zavisnosti od statusa citanja

let savTekst = document.querySelectorAll('p');
knjige.forEach((el, i)=>{
    if(el.statusCitanja==true){
        savTekst[i].style.color='blue';
    }
    else{
        savTekst[i].style.color= 'red';
    }
});

// selektovanje elemata tabele
tdEl = document.querySelectorAll('td'); //table data elements
trEl = document.querySelectorAll('tr'); //table row elements
// stilizacija tabele
table.style.borderCollapse = 'collapse';
table.style.width = '50%';
table.style.textAlign = 'center';
table.style.margin = 'auto';

tdEl.forEach(el=>{
    el.style.border = '1px solid black';
    el.style.padding = '10px';
});
trEl.forEach(el=>{
    el.style.border = '1px solid black';
});
