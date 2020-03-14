//MOJ NACIN
/*
import {generateImage} from "./modules/general.js";
import {generateList, generateListItem} from "./modules/list.js";
import {generateTable, generateTableRow, generateTableItem} from "./modules/table.js";

generateImage("1.png");
generateImage('2.png');

generateList('div');
generateListItem('ul','1.png');
generateListItem('ul','2.png');

generateTable('div');
generateTableRow('table');
generateTableItem('tr', 'photo1.jfif');
generateTableItem('tr', 'photo2.jfif');
generateTableItem('tr', 'photo3.jfif');
*/


/*
import {generateList, generateItem as generateListItem} from "./modules/list.js";
import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";


let ul = generateList(document.body);
generateListItem(ul, "img/photo1.jfif");
generateListItem(ul, "img/photo2.jfif");
generateListItem(ul, "img/photo3.jfif");

let ul2 = generateList(document.body);
generateListItem(ul2, "img/photo3.jfif");

let table = generateTable(document.body);
let tr1 = generateTableRow(table);
generateTableItem(tr1, "img/photo1.jfif");
generateTableItem(tr1, "img/photo2.jfif");
let tr2 = generateTableRow(table);
generateTableItem(tr2, "img/photo3.jfif");
generateTableItem(tr2, "img/photo1.jfif");
generateTableItem(tr2, "img/photo2.jfif");
*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
List.generateItem(ul, "img/photo1.jfif");
List.generateItem(ul, "img/photo2.jfif");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "img/photo1.jfif");
Table.generateItem(tr, "img/photo2.jfif");
Table.generateItem(tr, "img/photo3.jfif");