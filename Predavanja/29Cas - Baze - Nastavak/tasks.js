let form = document.querySelector('form');
let poruka = document.querySelector('#poruka');

form.addEventListener('submit', event =>{
    event.preventDefault();
    let title = form.title.value;
    let startDate = form.start_date.value;
    let dueDate = form.due_date.value;
    let description = form.description.value;
    let priority;
    if(form.priority.checked){
        priority = true;
    }
    else{
        priority = false;
    }

    // console.log(title, startDate, dueDate, description, priority);

    db.collection('tasks').doc().set({
        title: title,
        start_date: startDate,
        due_date: dueDate,
        description: description,
        priority: priority
    })
    .then(()=>{
        poruka.innerHTML = `Task sa naslovom ${title} je dodat u bazu!`
    })
    .catch(error => {
        poruka.innerHTML = `Greska prilikom dodavanja taska sa naslovom ${title}, ${error}`;
    });
    
});