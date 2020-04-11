let form = document.querySelector('form');
let inputNo = document.querySelector('#inputNo');
let resultDiv = document.querySelector('#result');
let b = Math.floor(Math.random() * 100);
let brojac = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    brojac++;
    console.log(b);
    let x = inputNo.value;
    if(x>b){
        resultDiv.innerHTML = `Uneti broj je veci!`;
    }
    else if(x<b){
        resultDiv.innerHTML = `Uneti broj je manji!`;
    }
    else{
        resultDiv.innerHTML = `POGODILI STE BROJ iz ${brojac}. puta!`;
    }
    form.reset();
})