"use strict";
console.log("typescript is still here");
console.log("typescript is amazing");
//Creating a class
class User {
    constructor(email, name) {
        this.city = ''; //if you're adding a city then you need to initialize it
        this.email = email;
        this.name = name;
    }
}
const Isaac = new User("i@i.com", "isaac");
Isaac.city = "kadaCity"; //I can Have access to the city
