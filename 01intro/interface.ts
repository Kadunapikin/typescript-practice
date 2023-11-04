//working with interface
interface User {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: number
    startTrial: () => string
    getCoupon (couponName: string, value: number): number
}


const Izo: User = {dbId: 22, email: 'i@i.com', userId: 13927,
startTrial: () => {
    return 'Trial started'
}, githubToken: '',
getCoupon: (name: 'Iceman', off: 15) => {
    return 15
}
}

//Reopning the interface
interface User {  //you can add more id to already created interface
    githubToken: string
}

// extending an interface
interface Admin extends User {
    role: 'admin' | 'leaner' | 'instructor'
}

const Masku: Admin = {dbId: 22, email: 'i@i.com', userId: 13927,
startTrial: () => {
    return 'Trial started'
}, githubToken: '',
getCoupon: (name: 'Iceman', off: 15) => {
    return 15
}, role: 'admin'
}
