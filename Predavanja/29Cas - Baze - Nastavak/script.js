//console.log(db); //objekat konekcije

let kolekcija1 = db.collection('tasks'); //objekat kolekcije
console.log(kolekcija1);

let task01 = kolekcija1.doc('task-01');
console.log(task01);

// let task02 = kolekcija1.doc('task-02');


let task02 = db.doc('tasks/task-02');
console.log(task02);

let task001 = db.collection('tasks').doc('task-01');
console.log(task001);

let c1 = {
    name: 'Filip FIlipovic',
    age: 50,
    addresses: ['Beograd', 'Pozarevac', 'Negotin'],
    salary: 1200
}

db.collection('customers').doc('3').set(c1) // ako se u .doc() ostavi prazno odnda ce se generisati random id
.then(()=>{
    console.log('Custamer added successfully');
})
.catch(error=>{
    console.error('Error while adding customer', error);
})


let c2 = {
    gender: 'male',
    height: 180
}

let s = {
    merge: true
}

db.collection('customers').doc('3').set(c2, s) // ako se u .doc() ostavi prazno odnda ce se generisati random id
.then(()=>{
    console.log('Custamer added successfully');
})
.catch(error=>{
    console.error('Error while adding customer', error);
});

let datum1 = new Date('2020-03-17 19:00:00');
let datum2 = new Date('2020-03-17 21:00:00');

let t3 = {
    title: "Fudbal",
    priority: false,
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    description: 'Moramo da odemo na fudbal sa drugarima.'
}

db.collection('tasks').doc('task-03').set(t3)
.then(()=>{
    console.log('Task added successfully!');
})
.catch(error =>{
    console.log('Can not add the task.', error);
});


db.collection('tasks').doc('task-03').update({
    description: 'Fudbalica sa drustvom ako stignem.'
})
.then(()=>{
    console.log('Task updated');
})
.catch(error =>{
    console.error('Can not update the task', error);
})
