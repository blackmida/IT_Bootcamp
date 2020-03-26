let movies = db.collection('movies');

movies.doc('2').set({
    name: 'Titanic',
    director: { director_name: 'James', director_surname: 'Cameron' },
    release_year: 1997,
    genres: ['Drama'],
    rating: 7.8
})
    .then(() => {
        console.log('Movie has beed added');
    })
    .catch(error => {
        console.error('Movie has not been added: ', error);
    });

movies.doc('3').set({
    name: 'Gladiator',
    director: { director_name: 'Fridli', director_surname: 'Skot' },
    release_year: 2000,
    genres: ['Drama', 'Action', 'Adventure'],
    rating: 1
})
    .then(() => {
        console.log('Movie has beed added');
    })
    .catch(error => {
        console.error('Movie has not been added: ', error);
    });

movies.doc('4').set({
    name: 'Finding',
    director: { director_name: 'Andrew', director_surname: 'Stanton' },
    release_year: 20,
    genres: ['Animation', 'Comedy', 'Adventure'],
    rating: 8.1
})
    .then(() => {
        console.log('Movie has beed added');
    })
    .catch(error => {
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
    .then(() => {
        console.log('Movie changed successfully');
    })
    .catch(error => {
        console.error('Error while chaning movie', error);
    });

//delovi objekta za izmenu
let f2 = {
    director: { director_surname: 'Scott' },
    rating: 8.5
}


movies.doc('3').set(f2, s)
    .then(() => {
        console.log('Movie changed successfully');
    })
    .catch(error => {
        console.error('Error while chaning movie', error);
    });


//DODAJE ZANR NEKOM FILMU //romance
let movie = db.doc('movies/2');
movie.update({
    genres: firebase.firestore.FieldValue.arrayUnion('Romance')
});

movie.update({
    genres: firebase.firestore.FieldValue.arrayUnion('Comedy')
});

//UKLANJA ZANR NEKOM FILMU
movie.update({
    genres: firebase.firestore.FieldValue.arrayRemove('Comedy')
})

//MENJANJE IMENA ILI PREZIMENA REZISERA

movie = db.doc('movies/3'); //nova vrednost za promenljivu movie
movie.update({ 'director.director_name': 'Ridley' });


// Filmovi koje je rezirao George Lucas
movies
    .where('director.director_surname', '==', 'Lucas')
    .where('director.director_name', '==', 'George')
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log('Rezirao George Lucas:', doc.id, '=>', doc.data().name);
        })
    })
    .catch(error => { console.error('Cannot find that director: ', error) })


// FIlmovi cija je ocena izmedju 5 i 10
movies
    .where('rating', '>', 5)
    .where('rating', '<', 10)
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log('Film sa ocenom vecom od 5: ',doc.id, '=>', doc.data().name, doc.data().rating);
        })
    })
    .catch(error => { console.error('Cannot find that director: ', error) })

// Filmovi kojima je zanr komedija, tragedija ili drama
movies
    .where('genres', 'array-contains-any', ['Comedy', 'Tragedy', 'Drama'])
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(doc.id, '=>', doc.data().name, doc.data().genres);
        })
    })
    .catch(error => { console.error('Cannot find that document: ', error) })

// Filmovi iz 21 veka
movies
    .where('release_year', '>=', 2001)
    .where('release_year', '<=', 2100)
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log('Film iz 21.veka: ',doc.id, '=>', doc.data().name, doc.data().release_year);
        })
    })
    .catch(error => { console.error('Cannot find that document: '), error })


// Najbolje rangiran film
movies
    .orderBy('rating', 'desc')
    .limit(1)
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log("The best rated movie is: ", doc.data());
        });
    })
    .catch(error => {console.error("Cannot get documents from collection: ", error)});

    
// Najslabije rangirana drama
movies
    .where('genres', 'array-contains', 'Drama')
    .orderBy('rating', 'asc')
    .limit(1)
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log("The worst drama movie is: ", doc.data());
        });
    })
    .catch(error => {console.error("Cannot get documents from collection: ", error)});

