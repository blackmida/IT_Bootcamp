let form = document.getElementById('login-form');
let input = document.getElementById('username');
let btn = document.getElementById('submit');
let divError = document.getElementById('error');
let patternUsername = /^[a-zA-Z0-9]{5,15}$/;

input.addEventListener('keyup', (e)=>{
    if(patternUsername.test(input.value)){
        // input.classList.add('success');
        input.setAttribute('class', 'success');
    }
    else{
        // input.classList.add('error');
        input.setAttribute('class', 'error');
    }
});

form.addEventListener('submit', (e)=>{
    e.preventDefault(); // da se ne osvezava na submit kad se klikne, vec ostaje

    var username = input.value;

    if(patternUsername.test(username)){
        divError.textContent = `Podaci uspesno uneti, Vas username je ${username}`;
    }
    else{
        divError.textContent = 'Sme sadrzati samo slova ili brojeve'
    };
});

