// MOJ NACIN
/* 
function generateTable(parent){
    document.querySelector(parent).innerHTML += `<table></table>`;
};

function generateTableRow(parent){
    document.querySelector(parent).innerHTML+= `<tr></tr>`;
};

function generateTableItem(parent, src){
    let tr = document.querySelector(parent);
    tr.innerHTML+=`<td><img src='img/${src}'></td>`;
};

export {generateTable, generateTableRow, generateTableItem};
*/

// import {generateImage} from "./general.js";
import generateImage from "./general.js";

let generateTable = parent => {
    let table = document.createElement('table');
    table.style.border = "1px solid black";
    parent.appendChild(table);
    return table;
};

let generateTableRow = parent =>{
    let tr = document.createElement('tr');
    tr.style.padding = '10px';
    parent.appendChild(tr);
    return tr;
};

let generateItem = (parent, src) =>{
    let td = document.createElement('td');
    let img =  generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
};

export {generateTable, generateTableRow, generateItem};