let movies = db.collection('movies');

movies.doc('2').set({
    name: 'Titanic',
    director: {director_name: 'James', director_surname: 'Cameron'},
    release_year: 1997,
    genres: ['Drama'],
    rating: 7.8
})
.then(()=>{
    console.log('Movie has beed added');
})
.catch(error =>{
    console.error('Movie has not been added: ', error);
});

movies.doc('3').set({
    name: 'Gladiator',
    director: {director_name: 'Fridli', director_surname: 'Skot'},
    release_year: 2000,
    genres: ['Drama', 'Action', 'Adventure'],
    rating: 1
})
.then(()=>{
    console.log('Movie has beed added');
})
.catch(error =>{
    console.error('Movie has not been added: ', error);
});

movies.doc('4').set({
    name: 'Finding',
    director: {director_name: 'Andrew', director_surname: 'Stanton'},
    release_year: 20,
    genres: ['Animation', 'Comedy', 'Adventure'],
    rating: 8.1
})
.then(()=>{
    console.log('Movie has beed added');
})
.catch(error =>{
    console.error('Movie has not been added: ', error);
});


// MENJA PODATKE NEKIM FILMOVIMA

let s = {
    merge: true
}

    //delovi objekta za izmenu
let f1 = {
    name: 'Finding Nemo',
    release_year: 2003
}

movies.doc('4').set(f1, s)
.then(()=>{
    console.log('Movie changed successfully');
})
.catch(error=>{
    console.error('Error while chaning movie', error);
});

    //delovi objekta za izmenu
let f2 = {
    director: {director_surname: 'Scott'},
    rating: 8.5
}


movies.doc('3').set(f2, s)
.then(()=>{
    console.log('Movie changed successfully');
})
.catch(error=>{
    console.error('Error while chaning movie', error);
});


//DODAJE ZANR NEKOM FILMU //romance
let movie = db.doc('movies/2');
movie.update({
    genres : firebase.firestore.FieldValue.arrayUnion('Romance')
});

movie.update({
    genres : firebase.firestore.FieldValue.arrayUnion('Comedy')
});

//UKLANJA ZANR NEKOM FILMU
movie.update({
    genres : firebase.firestore.FieldValue.arrayRemove('Comedy')
})

//MENJANJE IMENA ILI PREZIMENA REZISERA

movie = db.doc('movies/3'); //nova vrednost za promenljivu movie
movie.update({
    'director.director_name': 'Ridley'
});