//working with interface
interface User {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: number
}

const Izo: User = {dbId: 22, email: 'i@i.com', userId: 13927}