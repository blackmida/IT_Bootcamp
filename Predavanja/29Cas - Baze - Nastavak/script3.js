//Prikazati sve dokumente iz kolekcije customers sortirane po imenu
/*
db.collection('customers')
.orderBy('name')
.get()
.then(snapshot =>{
    snapshot.docs.forEach(doc =>{
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
    });
})
.catch(error => {
    console.error("Error getting documents: ", error);
});
*/

//iz kolekcije customers procitati sve klijhent koji imaju adresu u nisu.
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
.get()
.then(snapshot =>{
    snapshot.docs.forEach(doc =>{
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
    });
})
.catch(error => {
    console.error("Error getting documents: ", error);
});
*/

//Vraca sve koji imaju platu preko 500
/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot =>{
    snapshot.docs.forEach(doc =>{
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
    });
})
.catch(error => {
    console.error("Error getting documents: ", error);
});
*/

// da je plata izmedju 300 i 800
/*
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot =>{
    snapshot.docs.forEach(doc =>{
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
    });
})
.catch(error => {
    console.error("Error getting documents: ", error);
});
*/

//iz kolekcije custoemr procitati sve klijente koji imaju adresu u nisu ili beogradu
/*
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(snapshot =>{
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
    });
})
.catch(error => {
    console.error('Error getting documents: ', error);
})
*/


//Iz kolekcije tasks procitati sve zadatke koji su prioritetni

/*
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot =>{
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
    });
})
.catch(error => {
    console.error('Error getting documents: ', error);
})
*/

//sve zadatke koji treba da se izvrse u tekucoj godini
let datum1 = '2020-01-01';
let datum2 = '2020-12-31';

// OVO JE POREDJENJE KADA JE POLJE STRING
/*
    db.collection('tasks')
    .where('start_date', '>=', datum1)
    .where('start_date', '<=', datum2)
    .get()
    .then(snapshot =>{
        snapshot.docs.forEach(doc => {
            let polja = doc.data();
            let id = doc.id;
            console.log(id, '=>', polja);
        });
    })
    .catch(error => {
        console.error('Error getting documents: ', error);
    })
*/

//POREDJENJE KADA JE POLJE TIME_STAMP
/*
    let d1 = new Date(datum1);
    let d2 = new Date(datum2);
    db.collection('tasks')
    .where('start_date', '>=', firebase.firestore.Timestamp.fromDate(d1))
    .where('start_date', '<=', firebase.firestore.Timestamp.fromDate(d2))
    .get()
    .then(snapshot =>{
        snapshot.docs.forEach(doc => {
            let polja = doc.data();
            let id = doc.id;
            console.log(id, '=>', polja);
        });
    })
    .catch(error => {
        console.error('Error getting documents: ', error);
    })
*/

//svi zadaci koji su zavrseni
//poredjenje kada je polje string
/*
db.collection('tasks')
.where('due_date', '<=', '2020-03-19')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
        });
})
.catch(error => {
    console.error('Error getting documents: ', error);
})
*/

// poredjenje kada je polje timestamp
/*
let now = new Date();
db.collection('tasks')
.where('due_date', '<=', firebase.firestore.Timestamp.fromDate(now))
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
        });
})
.catch(error => {
    console.error('Error getting documents: ', error);
})
*/

//sve zadatke koji tk treba da pocnu

/*
let now = new Date();
db.collection('tasks')
.where('start_date', '>', firebase.firestore.Timestamp.fromDate(now))
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, '=>', polja);
        });
})
.catch(error => {
    console.error('Error getting documents: ', error);
})
*/

//sve klijente koji imaju 22 25 ili 28 godina
db.collection('customers')
    .where('age', 'in', [22, 25, 28])
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            let polja = doc.data();
            let id = doc.id;
            console.log(id, '=>', polja);
        });
    })
    .catch(error => {
        console.error('Error whi;e getting documents: ', error);
    })