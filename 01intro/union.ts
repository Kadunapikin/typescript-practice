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

export {}