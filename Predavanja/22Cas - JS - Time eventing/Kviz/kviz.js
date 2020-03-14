let form = document.querySelector('form');
let tacniOdgovori = ['B', 'A', 'B', 'B', 'B'];

let div = document.createElement('div');
div.classList.add('intro');

let text = document.createElement('div');
text.classList.add('text');

let h2 = document.createElement('h2');

text.appendChild(h2);
div.appendChild(text);

let whereChild = document.body.children[1];
document.body.insertBefore(div, whereChild);
div.style.display = 'none';


/*
form.addEventListener('submit', (e)=>{
    e.preventDefault(); // ovim joj kazemo da ne salje nista na server nego da ostane na stranici

    // potrebno je koji je radio button selektovan
    let checkovi = document.querySelectorAll('.q1');
    checkovi.forEach(el=>{
        if(el.checked == true){
            console.log(el.value);
        };
    });
});
*/

// za forme
// 1. moramo da imamo objekat forme  - to je promenljiva form
// 2. svi elementi tabele u html moraju da imaju name attribute
form.addEventListener('submit', e => {
    e.preventDefault();

    let odg1 = form.q1.value;
    let odg2 = form.q2.value;
    let odg3 = form.q3.value;
    let odg4 = form.q4.value;
    let nickname = document.getElementById('nickname').value;

    console.log(odg1, odg2, odg3, odg4);

    let odgovori = [odg1, odg2, odg3, odg4];
    let score = 0;
    odgovori.forEach((el, i) => {
        if(el==tacniOdgovori[i]){
            score+=20;
        };
    });

    if(nickname.length>6){
        score+=20;
    };
    console.log(score);
    if(score>=80){
        console.log(`Linux je za vas`);
    }
    else{
        console.log('Linux nije za vas');
    }

    scrollTo(0,0);
    
    div.style.display = 'block';
    let broj = 0;
    let clock = setInterval(()=>{
        h2.textContent = `Vas odgovor je: ${broj}%`;
        if(broj<score){
            broj++
        }
        else{
            clearInterval(clock);
        }
    }, 20);
    
    
});

