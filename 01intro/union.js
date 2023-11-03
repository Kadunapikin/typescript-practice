"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//working with union
var score = 555;
score = '45';
var Isaac = { name: 'Bakoshi', id: 13927 };
Isaac = { userName: 'Iceman', id: 13927 };
//working with functions
// function getDbId (id: string | number) {
//     console.log(`The DB id is ${id}`);
// }
getDbId(5);
getDbId('7');
//A check must be added before a method can be used on variable that has a union
function getDbId(id) {
    if (id === 'string') {
        id.toUpperCase();
    }
}
//working with union in an array
var data = [1, 2, 3];
var data1 = ['1', '2', '3'];
var data2 = [1, 2, '3', '4'];
