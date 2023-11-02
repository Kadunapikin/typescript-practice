const person = {
    name: 'Isaac',
    email: 'isaac@I.com',
    isActive: true
};

function createPerson ({name: string, isPaid: boolean}) {
}
createPerson({name: 'Abel', isPaid: false});

//Function to return an object
function createCourse ():{name: string, price: number} {
    return {name: 'reactJs', price: 399}
}

//weird object behavior
function createPet ({name: string, isPaid: boolean}) {
}
// createPet({name: 'cat', isPaid: false, color: white}); 
//passing another argurment isn't possible because it's not among the parameters. however, saving it in a variable 
const newPet = {name: 'cat', isPaid: false, color: 'white'}; 
createPet(newPet);



export {}