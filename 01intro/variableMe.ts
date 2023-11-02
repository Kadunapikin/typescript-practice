//String
let greeting: string = 'Hello Isaac';
greeting.toLowerCase
console.log(greeting);

//Number
let userId: number = 13927;
const numberMethod = userId.toLocaleString();
console.log(numberMethod);

//boolean
let isLoggedIn: boolean = false;

//Any; you can use th compiller flag noImplicitAny to flag any implicit Any as an error in other to avoid using the any type
let knack;

const getKnack = () => {
    return true
}

knack = getKnack();

export {}
