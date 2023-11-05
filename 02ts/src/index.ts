console.log("typescript is still here");
console.log("typescript is amazing");

//Creating a class
class User {
    email: string
    name: string
    city: string = ''  //if you're adding a city then you need to initialize it
    constructor (email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const Isaac = new User("i@i.com", "isaac");
Isaac.city = "kadaCity"  //I can Have access to the city