//working with union
let score: string | number = 555;
score = '45';

//creating different type to work with
type User = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number;
}

let Isaac: User | Admin = {name: 'Bakoshi', id: 13927}
Isaac = {userName: 'Iceman', id: 13927}


//working with functions
// function getDbId (id: string | number) {
//     console.log(`The DB id is ${id}`);
// }
getDbId(5);
getDbId('7');

//A check must be added before a method can be used on variable that has a union
function getDbId (id: string | number) {
    if (id === 'string') {
        id.toUpperCase()
    }
}



export {}