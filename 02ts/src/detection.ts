function detectType(val: number | string | number) {
    if (typeof val === "string") {
        return val.toLowerCase
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("provide id");
        return
    }
    id.toLowerCase
}


//The in operator narrowing
interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean
}

function isAdminAccount (account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    return
}
//The instance off
new Date()
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString);
    } else {
        console.log(x.toLowerCase);
    }
}

//Using type redicates
type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird) {
    return (pet as Fish).swim !== undefined
}