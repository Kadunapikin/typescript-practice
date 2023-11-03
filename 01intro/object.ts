// const person = {
//     name: 'Isaac',
//     email: 'isaac@I.com',
//     isActive: true
// };

// function createPerson ({name: string, isPaid: boolean}) {
// }
// createPerson({name: 'Abel', isPaid: false});

// //Function to return an object
// function createCourse ():{name: string, price: number} {
//     return {name: 'reactJs', price: 399}
// }

// //weird object behavior
// function createPet ({name: string, isPaid: boolean}) {
// }
// // createPet({name: 'cat', isPaid: false, color: white}); 
// //passing another argurment isn't possible because it's not among the parameters. however, saving it in a variable 
// const newPet = {name: 'cat', isPaid: false, color: 'white'}; 
// createPet(newPet);

// //Name type alias
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser (user: User) {}
// createUser({name: 'zikist', email: 'zikist@z.com', isActive: false})


//Adding the read only keyword
type User = {
    readonly _id: string  //when you don't want anyone to have access to this on the data base
    name: string;
    email: string;
    isActive: boolean;
    creaditCard?: number //Adding an optional variable
}

let myUser: User = {
    _id: '1234',
    name: 'H',
    email: 'h@h.com',
    isActive: false
}

//You can change somethings except for _id
myUser.email = 'm@m.com';
// myUser._id = '13927'; // Won't work coz its read only

//using existing type to define a new type
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardDate & cardNumber & {
    cvv:number
}

export {}