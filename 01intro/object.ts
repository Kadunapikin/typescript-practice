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

export {}