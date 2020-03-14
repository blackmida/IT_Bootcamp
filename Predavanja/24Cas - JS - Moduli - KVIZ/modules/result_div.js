let createDiv = (cls, parent, whereChild) => {
    // kreira div element sa klasom u parentu pre where child
    let div = document.createElement('div');
    div.classList.add(cls);
    let text = document.createElement('div');
    text.classList.add('text');
    let h2 = document.createElement('h2');

    text.appendChild(h2);
    div.appendChild(text);
    parent.insertBefore(div, whereChild);
    div.style.display = 'none';
    return [div, h2];
};

export default createDiv;

