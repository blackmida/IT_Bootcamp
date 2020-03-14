let blog1 = {
    title: 'Blog 1!',
    content: 'Tekst 1',
    likes: 0,
    dislikes: 50
};

let blog2 = {
    title: 'Blog 2!',
    content: 'Tekst 2',
    likes: 20,
    dislikes: 20
};

let blog3 = {
    title: 'Blog 3?',
    content: 'Tekst 3',
    likes: 5,
    dislikes: 50
};

let user = {
    username: 'JohnDoe',
    age: 30,
    blogs: ['Title 1', 'Title 2', 'Title 3'],
    logIn: function () {
        console.log(`Ulogovani ste ${user.username}`);
    },

    logBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el);
        })
    }

};

let arrBlogs = user.blogs;
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(`Naslov bloga je: ${arrBlogs[i]}`);
}

// ispis nizova forEach metodom
arrBlogs.forEach(el => {
    console.log(el);
})

// Pozivanje metode iz objekta
user.logIn();

// pozivanje propertija unutar metode nekog objekta referncom THIS
user.logBlogs();

// kreiranje niza objekata
let arrBlogsObjects = [blog1, blog2, blog3];
arrBlogsObjects.forEach(el => {
    console.log(el);
});

// ispisivanje naslova niza objekata
arrBlogsObjects.forEach(el => {
    console.log(el.title);
});

for (let i = 0; i < arrBlogsObjects.length; i++) {
    console.log(arrBlogsObjects[i].title);
};


// Ukupno lajkova za sve blogove
let totalLikes = (arrBlogsObjects) => {
    let total = 0;
    arrBlogsObjects.forEach(el => {
        total += el.likes;
    })

    // console.log(total); // ako f-ja ispisuje
    return total;
}
// totalLikes(arrBlogsObjects); // ovo je poziz ako f=ja ispisuje
console.log(totalLikes(arrBlogsObjects));


// Ukupno disajkova za sve blogove
let totalDislikes = (arrBlogsObjects) => {
    let total = 0;
    arrBlogsObjects.forEach(el => {
        total += el.dislikes;
    })

    // console.log(total); // ako f-ja ispisuje
    return total;
}
// totalLikes(arrBlogsObjects); // ovo je poziz ako f=ja ispisuje
console.log(totalDislikes(arrBlogsObjects));

// prosecno lajkova za sve blogove
let averageLike = (arrBlogsObjects) => {
    // let ukupno = totalLikes(arrBlogsObjects); // OVO JE UKOLIKO NE POZIVANO F-JU U RETURN
    let brojac = arrBlogsObjects.length;
    return totalLikes(arrBlogsObjects) / brojac; //return ukupno/brojac;
}
console.log(averageLike(arrBlogsObjects));


// prosecno dislike za sve blogove
let averageDislike = (arrBlogsObjects) => {
    // let ukupno = totalLikes(arrBlogsObjects); // OVO JE UKOLIKO NE POZIVANO F-JU U RETURN
    let brojac = arrBlogsObjects.length;
    return totalDislikes(arrBlogsObjects) / brojac; //return ukupno/brojac;
}
console.log(averageDislike(arrBlogsObjects));

// arrow prosledjuje naslove objekta, ispisuje naslove koji imaju vise poz nego neg ocena
let morePossitive = niz => {
    niz.forEach(el => {
        if (el.likes > el.dislikes) {
            console.log(el.title);
        }
    })
};

morePossitive(arrBlogsObjects);

// arrow f-ja koja iz niz aobjekata ispisiuje sve naslove koji se zavrasavaju !

let titlesWithUzvicnik = niz => {
    niz.forEach(el => {
        if (el.title.endsWith("!")) {
            console.log(el.title);
        };
    });
};

titlesWithUzvicnik(arrBlogsObjects);

// object in object

let user1 = {
    username: 'JelenaMatejic',
    age: 25,
    blogs: [blog1, blog2, blog3],

    // metoda koja ispisuje sve objekte unutar user1 objekta - iz niza blogs
    logBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el);
        });
    },

    // metoda koja ispisuje sve naslova iz niza objekta koji se nalaze u objektu user1
    logTitleBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};

console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();

let user2 = {
    username: 'PeraPeric',
    age: 16,
    blogs: [blog1, blog2]
};

let user3 = {
    username: 'AnaAntic',
    age: 29,
    blogs: [blog1, blog3]
};

// Niz korisniika

let users = [user1, user2, user3];

// ispisati autore koji imaju ispod 18 godina
users.forEach(el => {
    if (el.age < 18) {
        console.log(el.username);
    };
});

//  ISTI ZADATAK SAMO ARROW FUNKCIJA
let usersUnder18 = users => {
    users.forEach(el => {
        if (el.age < 18) {
            console.log(el.username);
        };
    });
};

usersUnder18(users);


//-------------------------------
console.log(`Ispisati naslove onih blogova sa vise od 50 lajkova:`);
// ispisati naslove onih blogova koji imaju vise od 50 lajkova
let over50Likes = users => {
    users.forEach(el => {
        let userBlogsArr = el.blogs;
        userBlogsArr.forEach(b => { // OVDE SMO NAZVALI PROMENLJIVU B, ALI MOZE I EL, NECE SMETATI
            if (b.likes > 50) {
                console.log(b.title);
            };
        });
    });
};
over50Likes(users); // ISPISIUJE ZA SVAKOG KORISNIKA

//---------------------------------
console.log(`Ispisati sve blgoove autora cije je username.`);
// ispisati sve blogove autora cije je username johndoe
let peraPericBlogs = (users, username) => {
    users.forEach(el => {
        if (el.username == username) {
            let userBlogsArr = el.blogs; // promenljiva/niz blogova nekog/svih korisnika
            userBlogsArr.forEach(b => {
                console.log(b.title);
            });
        };
    });
};
peraPericBlogs(users, 'AnaAntic');

//--------------------------------
console.log(`Imena autora koji imaju ukupno vise od 300 lajkova za blogove koje su napisali:`);

let popularAuthors = (users) => {
    users.forEach(el => {
        let userBlogsArr = el.blogs; // pravimo/ucitavamo niz blogova korisnika
        let lajkovi = totalLikes(userBlogsArr);
        if (lajkovi > 200) {
            console.log(el.username, totalLikes(userBlogsArr));
        };
    });
};
popularAuthors(users);

//-------------------------------
console.log(`Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena`);

let superBlog = niz => {
    let sum = 0; //suma svih autora svih blogova
    let sumDis = 0;
    let br = 0; //broj svih blogova
    niz.forEach(a => {   // "a" kao autor
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            br++;
            sum += b.likes;
            sumDis += b.dislikes;
        });
    });

    let avgLikes = sum / br;
    let avgDis = sumDis / br;

    niz.forEach(a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            if(avgLikes<b.likes && avgDis>b.dislikes){
                console.log(b.title);
            };
        });
    });
};

superBlog(users);