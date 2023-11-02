//Number function
function addTwo (num: number) {
    return num + 2
}

const plusTwo = addTwo(5);
console.log(plusTwo);

//string functon
function getUper(val: string) {
    return val.toUpperCase()
}
 const caps = getUper('masqured');
 console.log(caps);
 
function signUpUser (name: string, email: string, isPaid: boolean) {

}
signUpUser('Isaac', 'ibakoshi27@gmail.com', false);

//working with multipls parameter function but need to pass less argurment
const loginUser = (name: string, email: string, isPaid: boolean = false) => {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
loginUser('Isaac', 'i@i.com')

//Checking return values
function addTree (num: number): number {
    return num + 3;
}
addTree(5);

// function getValue (myValue: number): boolean {
//     if (myValue > 5) {
//         return true;
//     }
//     return '200 ok';
// }

const getHello = (s: string): string => {
    return ''
}

//mapping through an arrow function
const heros = ['thor', 'spiderman', 'ironman']
const whoIs = heros.map((hero) => {
    return `A hero is ${hero}`
})
console.log(whoIs);

//Dealing with errors
function consoleErr (errMsg: string): void {
    console.log(errMsg);
}
function handleErr (errMsg: string): never {
    throw new Error(errMsg);
}


export{}