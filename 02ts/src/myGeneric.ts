//Working with generics
const score: Array<number> = [];
const scoreNames: Array<string> = []

//using the || to add more type option
function identityOne(val: boolean | number): boolean | number {
    return val
}

//Using the any type. Using the any type key word is not ideal in ypescript. Any means if number type is entered, string type can be returned
function identityTwo (val: any): any {
    return val
}

//using the generic
function identityThree<type>(val: type): type {
    return val
}

identityThree(true)  //whatever data type you passed in, it converts the type into that data type

//using the generic in your own created data (interface)
interface Love {
    name: string,
    age: number
}

function identityFour<T> (val: T): T {
    return val
}

// identityFour<Love>({})


//Taking inputs as an array
function getSearchProducts<T> (product: T[]): T {
    //do some database operations
    const myIndex = 3
    return product[myIndex]
}

//Coverting same code into an arrow function
const getMoreSearchProducts =<T> (products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

