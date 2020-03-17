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
    name: 'Mika Mikic',
    age: 33,
    addresses: ['Beograd', 'Pozarevac', 'Negotin'],
    salary: 672.25
}
db.collection('customers').doc('3').set(c1)
.then(()=>{
    console.log('Custamer added successfully');
})
.catch(error=>{
    console.error('Error while adding customer', error);
})