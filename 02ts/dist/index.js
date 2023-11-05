"use strict";
console.log("typescript is still here");
console.log("typescript is amazing");
//Creating a class
class User {
    constructor(email, name, age) {
        this.city = ''; //if you're adding a city then you need to initialize it
        this.email = email;
        this.name = name;
        this.age = age;
    }
}
const Isaac = new User("i@i.com", "isaac", 32);
Isaac.city = "kadaCity"; //I can Have access to the city
Isaac.age; //Only public properties and the ones not assigned the private keywords can be accessed outside the class
