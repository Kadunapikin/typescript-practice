"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Number function
function addTwo(num) {
    return num + 2;
}
var plusTwo = addTwo(5);
console.log(plusTwo);
//string functon
function getUper(val) {
    return val.toUpperCase();
}
var caps = getUper('masqured');
console.log(caps);
function signUpUser(name, email, isPaid) {
}
signUpUser('Isaac', 'ibakoshi27@gmail.com', false);
//working with multipls parameter function but need to pass less argurment
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid === void 0) {
        isPaid = false;
    }
};
loginUser('Isaac', 'i@i.com');
//Checking return values
function addTree(num) {
    return num + 3;
}
addTree(5);
// function getValue (myValue: number): boolean {
//     if (myValue > 5) {
//         return true;
//     }
//     return '200 ok';
// }
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
var whoIs = heros.map(function (hero) {
    return "A hero is ".concat(hero);
});
console.log(whoIs);
