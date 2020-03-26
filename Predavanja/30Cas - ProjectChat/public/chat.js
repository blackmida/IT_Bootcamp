export class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub;
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    async addChat(mess){

        //Dohvatanje tekućeg datuma koji je potreban za timestamp
        let date = new Date();

        // Kreiranje objekta/dokumenta koji prosleđujemo bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        //Da sačuvamo dokument u bazi
        let response = await this.chats.add(docChat); 
        return response;
    }

    getChets(callback){
        this.unsub = this.chats
                    .where('room','==',this.room)
                    .orderBy('created_at')
                    .onSnapshot( snapshot => {
                        snapshot.docChanges().forEach( change => {
                            //Ako je poruka dodata u bazu onda raditi update
                            if( change.type === 'added' ){
                                //uradi update
                                callback(change.doc.data());
                            }
                        });
                    });
    }

    updateUsername(uu){
        //Suštinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
        this.username = uu;
        localStorage.setItem('usernameLS', uu);
    }

    updateRoom(ur){
        this.room = ur;
        //console.log("Updated room");
        if(this.unsub){
            this.unsub();
        }
    }

}

//Nova instanca klase (Novi objekat)
//let chatroom = new Chatroom('js', 'PeraPeric');

//console.log(chatroom);
/*
chatroom.addChat('Zdravo!')
    .then( () => {console.log('Čet je dodat!');})
    .catch( err => {console.log(err);});
*/

/*
chatroom.getChets( data => {
    console.log(data);
});

chatroom.updateRoom("general");

chatroom.getChets( data => {
                    console.log(data);
                });

chatroom.updateRoom('js');

chatroom.getChets( data => {console.log(data);} );
*/
/*
setTimeout( () => {
    chatroom.updateRoom('js');
    chatroom.updateUsername('Tina');
    chatroom.getChets( data => {
        console.log(data);
    });
    chatroom.addChat("Kako si Milice?");
}, 3000);
*/