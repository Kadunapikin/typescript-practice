//creating an array in typescript
const superHeroes: string[] = [];
const heroePower: number[] = [];

superHeroes.push('superman', 'ironman')
heroePower.push(2,3,4);
console.log(superHeroes);
console.log(heroePower);

//using a type
type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];
allUsers.push({name: 'Izo', isActive: false});
console.log(allUsers);



export {}