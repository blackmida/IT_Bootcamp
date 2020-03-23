class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub;
    }

    // Get metode
    get room() {
        return this._room;
    }
    set room(r) {
        this._room = r;
    }

    // set metode
    get username() {
        return this._username;
    }
    set username(u) {
        this._username = u;
    }

    async addChat(mess) {
        // Dohvatanje tekuceg datuma koji je potreban za time stamp
        let date = new Date();

        // Kreiranje objketa/dokumenta koji prosledjujemo bazi
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        // Da sacuvamo dokumnet u bazi
        //uvodimo odgovor koji ceka da se u cetove ubaci objekat chat
        let response = await this.chats.add(docChat);
        return response;
    }

    getChets(callback) {
        this.unsub = this.chats
                    .where('room', '==', this.room)
                    .orderBy('created_at')
                    .onSnapshot(snapshot => {
                        snapshot.docChanges().forEach(change => {
                            // ako je poruka dodata u bazu onda raditi update
                            if (change.type === 'added') {
                                //ako je izvrsena promena uradi update
                                callback(change.doc.data());
                            }
                        });
                    });
    }

    updateUsername(uu) {
        this.username = uu;
    }

    updateRoom(ur) {
        this.room = ur;
        console.log('Updated room');
        if(this.unsub){
            this.unsub();
        }
    }
}

let chatroom = new Chatroom('js', 'PeraPeric');
// console.log(chatroom);

/*
chatroom.addChat('Zdravo!')
    .then(() => {console.log('Chat je dodat!')})
    .catch(error => {console.error(`Chat nije dodat: ${error}`)})
*/
/*
chatroom.updateRoom('general');

chatroom.getChets(data => {
    console.log(data);
})


chatroom.updateRoom('js');
chatroom.getChets( data =>{
    console.log(data);
});
*/

setTimeout(()=>{
    chatroom.updateRoom('js');
    chatroom.updateUsername('Tina');
    chatroom.getChets( data => {
        console.log(data);
    });
    chatroom.addChat('Kako si Milice?')
}, 3000);