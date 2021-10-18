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



const array = ["apple", "banana"]
// 
// array.push("orange")

array = ["apple", "banana", "orange"]

console.log(array);



// 	Destructuring Objects & Arrays
// 	Template String
// 	Spread & Rest operators
// 	Optional and Named Parameters
// 	Classes & Modules
