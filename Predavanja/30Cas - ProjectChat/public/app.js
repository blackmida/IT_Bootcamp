//Moduli
import { Chatroom } from "./chat.js"
import { ChatUI } from "./ui.js"

//DOM elementi
let chatList = document.querySelector('#ulMessages');

let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

let formColor = document.querySelector('#formColor');
let inputColor = document.querySelector('#inputColor');

let rooms = document.querySelector('nav');
let updatedUsername = document.querySelector('#divUpdatedUsername');

let buttons = document.querySelectorAll('button');


//Provera username u lokalnoj memoriji
let checkUsername = () => {
    if (localStorage.usernameLS) {
        return localStorage.usernameLS;
    } else {
        return "anonymous";
    }
}

//Kreiranje instanci klasa
let chatroom = new Chatroom('js', checkUsername());
let chatui = new ChatUI(chatList);

//Provera prilikom učitanja stranice
//Koja soba je bila poslednja posećena, nju učitati 
let checkRoom = () => {
    if (localStorage.roomLS) {
        return localStorage.roomLS;
    } else {
        return "general";
    }
}
chatroom.updateRoom(checkRoom());

//Poslednjoj posećenoj sobi dodati klasu koja će da oboji to dugme
buttons.forEach(b => {
    if (b.id == checkRoom()) {
        b.classList.add('btn-selected');
    }
});

//Ispisi poruke
chatroom.getChets(data => {
    //console.log(data); //u konzoli
    chatui.templateLI(data);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit', e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then(() => formMessage.reset())
        .catch(error => console.log(error));

    //Izbrisati sve poruke sa stanice
    chatui.clear();

    //Učitati poruke za promenjenu sobu
    chatroom.getChets(data => {
        //console.log(data); //u konzoli
        chatui.templateLI(data);
    });

});


formColor.addEventListener('submit', e => {
    e.preventDefault();
    let color = inputColor.value;

    setTimeout(() => {
        document.body.setAttribute("style", `background-color: ${color}`)
    }, 500);
    localStorage.setItem('colorLS', color);
});


if (localStorage.colorLS) {
    document.body.setAttribute("style", `background-color: ${localStorage.colorLS}`);
}
else {
    body.setAttribute("style", `background-color: #ffffff`);
}



//Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let patternUsername = /^[\S]*[\S]$/;
    let newUsername = inputUsername.value;
    if (patternUsername.test(newUsername)) {
        chatroom.updateUsername(newUsername);
        formUsername.reset();

        //Osvežiti čet prilikom promene korisničkog imena tako što ga izbrišemo i učitamo ponovo
        chatui.clear();
        chatroom.getChets(data => {
            chatui.templateLI(data);
        });

        //Kada je Update ime prikazati poruku u trajanju od 3s
        updatedUsername.innerHTML = `Your username was updated to 
        <span id="spanNewUsername">${newUsername}</span>`;
        setTimeout(() => {
            updatedUsername.innerHTML = ``;
        }, 3000);
    }
    else {
        alert('Pogresan username!')
    }
});



//Promena soba
rooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        //Kada je kliknuto na dugme, dodeliti mu klasu da je baš ono selektovano

        buttons.forEach(b => {
            //"Očistiti" dugme od btn-selected klase
            if (b.classList.contains('btn-selected')) {
                b.classList.remove('btn-selected');
            }
        });
        let btnId = e.target.getAttribute('id');
        let btn = document.getElementById(btnId);

        btn.classList.add('btn-selected');

        //Izbrisati sve poruke sa stanice
        chatui.clear();

        //Promeniti sobu
        let newRoom = e.target.getAttribute('id');
        chatroom.updateRoom(newRoom);
        localStorage.setItem('roomLS', newRoom);

        //Učitati poruke za promenjenu sobu
        chatroom.getChets(data => {
            //console.log(data); //u konzoli
            chatui.templateLI(data);
        });
    }
});

