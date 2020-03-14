// MOJ NACIN
/*
function generateList(parent){
    let x = document.querySelector(parent);
    x.innerHTML+=`<ul></ul>`;
    x.style.listStyleType = 'none';
};

function generateListItem(parent, src){
    let lista = document.querySelector(parent);
    lista.innerHTML+=`<li><img src='img/${src}'></li>`;
    
};

export {generateList, generateListItem};
*/

// import {generateImage} from "./general.js";
import generateImage from "./general.js";

let generateList = parent => {
    let ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    parent.appendChild(ul);
    return ul;
};

let generateItem = (parent, src) => {
    let li = document.createElement('li');
    li.style.float = "left";
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
};

export {generateList, generateItem};