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