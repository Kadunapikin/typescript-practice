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
},
getCoupon: (name: 'Iceman', off: 15) => {
    return 15
}
}