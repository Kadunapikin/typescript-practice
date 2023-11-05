console.log("typescript is still here");
console.log("typescript is amazing");

//Creating a class
// class User {
//     private email: string
//     name: string
//     city: string = ''  //if you're adding a city then you need to initialize it
//     public age: number
//     constructor (email: string, name: string, age: number) {
//         this.email = email;
//         this.name = name;
//         this.age = age
//     }
// }

//A shorter way to write thesame code
class User {
    city: string = ''  //if you're adding a city then you need to initialize it
    constructor (
        public email: string, 
        public name: string, 
        public age: number,
        private userId: string) {
    }

    
    //adding a getter
    get getAppleEmail(): string{
        return `apple ${this.email}`
    }
}

const Isaac = new User("i@i.com", "isaac", 32, "123");
Isaac.city = "kadaCity"  //I can Have access to the city
Isaac.age  //Only public properties and the ones not assigned the private keywords can be accessed outside the class