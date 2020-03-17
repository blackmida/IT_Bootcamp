let task = db.collection('tasks').doc('task-01');


task.get()
.then(doc => {
    if(doc.exists){
        let temp = doc.data();
        console.log(temp);
    }
    else{
        console.log('No such document!');
    }
})
.catch(error => {
    error.log('Can not get document: ', error);
});

let tasks = db.collection('tasks');
/*
tasks.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
})
.catch(error =>{
    console.error('Can not get documents from collection: ', error);
})
*/

// prikaz svih dokumenata iz kolekcije, sortiranih po nekom polju
// jedan orderBy radi, zato sto, po defaultu, firestore kreira indeks za sva polja
// AKo imamo vise orderBy, to ne radi, nego mora prvo da se reira kompozitni index za ta polja
//ogranicenje broja dokumenata koji se prikazuju preko limit metode .limit()

/*
tasks
.orderBy('title', 'desc')
.orderBy('start_date')
.limit(2)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
})
.catch(error =>{
    console.error('Can not get documents from collection: ', error);
})
*/

// filtriranje dokumenata
tasks
.where('priority', '==', true)
.limit(2)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
})
.catch(error =>{
    console.error('Can not get documents from collection: ', error);
})