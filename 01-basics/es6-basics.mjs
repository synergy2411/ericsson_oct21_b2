//  ES6 Overview
// 	Arrow Functions
// - don't have arguments keyword
// - can not be called with 'new' operator
// - don't have 'this' reference

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         var self = this;
//         return function(){
//             return self.firstName + ", " +self.lastName
//         }
//     }
// }

// function Person(email, age){
//     // var this = {};
//     this.email = email;
//     this.age = age;
//     this.sayHi = function(){
//         return "Hello " + this.email;
//     }
//     // return this;
// }

// console.log(new Person("test@test.com", 32).sayHi());

// const Student = (name) => {
//     this.name = name;
//     this.sayHello = function(){
//         console.log("Hello " +this.name)
//     }
// }

// new Student("Foo").sayHello();

// var user = {
//         firstName : "Foo",
//         lastName : "Bar",
//         getFullName : function() {
//             return () => this.firstName + ", " +this.lastName
//         }
//     }

// var nestedFn = user.getFullName();
// console.log(nestedFn())

// console.log(user.getFullName())

// Vanilla JS
// var numbers= [1,2,3,4,5];

// var doubleArray = numbers.map(function(value, index){
//     // console.log("Index : ", index);
//     return value * 2
// })

// console.log(doubleArray);

// // Arrow () => {}

// var tripleValue = numbers.map((value, index) => {
//     console.log("Index : ", index);
//     return value * 3;
// })
// console.log(tripleValue);

// Block Scope

// function display(arr){
//     // var flash =  undefined;
//     // var load = undefined;

//     if(arr.length > 2){
//         let laod = "LOADING";
//         console.log(flash);                     // undefined
//     }else{
//         let flash = "FLASHING"
//     }
// }

// display([1,2,3,4])

// const username = "John Doe";

// username = "Foo";

// const user = {
//     name : "John"
// }

// // Immutable Change
// user = {
//     name : "James"
// }

// Mutable Change
// user.name = "Jenny"
// console.log(user);

// const array = ["apple", "banana"]
// //
// // array.push("orange")

// array = ["apple", "banana", "orange"]

// console.log(array);

// 	Destructuring Objects & Arrays - "unpacking" the collection

// let fruits = ["apple", "banana", "oranges"];

// let basket = ["drinks", ...fruits, "chips", "chocolate"];

// console.log(basket);

// let [, f2, f3] = fruits;

// console.log(f2); // ?

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   address: {
//     city: "Bengaluru",
//     street: "201 Main Road",
//   },
//   friends: ["James", "Jenny"],
// };

// let {
//   lastName: ln,
//   firstName: fn,
//   age,
//   address: { city, street },
//   friends: [friend1, friend2],
// } = user;

// console.log(city, friend1, age);


// let users = [
//     {username : "John", age : 32},
//     {username : "Jenny", age : 33},
//     {username : "James", age : 34},
// ]

// let [
//     {username : u1, age : a1},
//     {username : u2, age: a2},
//     {username : u3, age: a3}
// ] = users;

// console.log(u3)

// 	Template String " " | ' ' | ` ` (Back tick)
// - Embed the variables without (+)
// - Multiline string
// let username = "John Doe";
// let age = 32;

// let str = `Hello ${username}!

// I'm ${age} years old.
// `

// console.log(str)


















// 	Spread & Rest operators (...)
// - Spread : spread the collection; used with collection

// let arr = [3,4,5];
// let newArr = [1,2, ...arr, 6,7,8];
// let newArr1 = [1,2, arr, 6,7,8];
// console.log(newArr);
// console.log(newArr1);

// let user = {
//     email : "john@test.com"
// }

// let newUser = {
//     ...user,
//     age : 34
// }

// console.log(newUser);


// - Rest : Creates the collection; always present in function parameter list

// function display(username, ...args){
//     console.log(args[0])            // ?
// }

// display("john", 32, true)

















// nodemon es6-basics.js














// 	Optional and Named Parameters

function demo(state = {counter : 0}){
    console.log(state);
}

demo({counter : 10})
demo()
















// 	Classes & Modules

import { MAGIC_NUMBER, getDailyFortune } from './animal.mjs';

// Default Export
import TheClass from './animal.mjs';

let tiger = new TheClass("Tiger", 4);
console.log(tiger.getDetails())

let bunny = new TheClass("Rabbit", 4);
console.log(bunny.getDetails())

console.log("Lucky Number : ", MAGIC_NUMBER)

console.log(getDailyFortune())











