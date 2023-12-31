"use strict";
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
    constructor(email, name, age, userId) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.userId = userId;
        this._courseCount = 1; //changing this access modifier from private to protected will make accessible to another class that extends User but not outside the User class
        this.city = ''; //if you're adding a city then you need to initialize it
    }
    //adding a getter
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    //adding a setter
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount;
    }
}
const Isaac = new User("i@i.com", "isaac", 32, "123");
Isaac.city = "kadaCity"; //I can Have access to the city
Isaac.age; //Only public properties and the ones not assigned the private keywords can be accessed outside the class
//working with protected access modifier
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
