let Tuser: (string | number | boolean)[] = [1,'5', true]; //this can be written without following the format of the type

//working with tupels
let tUser: [string, boolean, number]
tUser = ['Isaac', false, 454]  //if you switch the arrangement youll get an error message

//using tupel on rgb
let rgb: [number, number, number] = [255,255,255];

//using a tupel on type
type User = [number, string]
const newUser: User = [244, 'i@i.com']

//it is possible to rewrite the string or even use an array method to push a string into the tupel array
newUser[1] = 'izo@i.com'; 

newUser.push(13927);

console.log(newUser);

export {}