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