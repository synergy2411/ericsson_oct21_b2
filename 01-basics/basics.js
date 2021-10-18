console.clear();

// Functions as first-class citizens
// Functions are not only Syntax, they are the values as well.

// Function Syntax
// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(3,4));

// Function expression
// var addition = function (n1, n2){return n1 + n2}

// console.log(addition(2,5));          // ?




// Nested Functions

// function mystry(){
//     return function(){
//         return 12;
//     }
// }

// var nestedFn =  mystry();

// console.log(nestedFn())

// console.log(mystry());          // function



// - Creation Phase - 
// - Execution Phase

// Function Hoisting

// function mystry(){
//     function chooseNumber(){
//         return 12;
//     }
//     return chooseNumber;
//     function chooseNumber(){
//         return 7;
//     }
// }


// var chooseNumber = mystry();

// console.log(chooseNumber());        // 12


// function mystry(){
//     var chooseNumber = function (){
//         return 12;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 7;
//     }
// }

// var chooseNumber = mystry();

// console.log(chooseNumber());  

// function xyz(){}


// Function can be supplied as paramter
// function greet(){
//     console.log("Hello")
// }

// // Higher Order Function
// function sayHello(cb){
//     cb();
// }

// sayHello(greet)



// Scope Chaining
// var x;

// function a(){
//     function b (){
//         console.log(x)              // ?
//     }
//     b()
// }

// a();


// Lexical Scope

// var x = 201;
// function b(){
//     console.log(x)
// }

// function a(){
//     var x = 101;
//     b();
// }

// a();



// Closure -> Process of binding the outer scope variable with the nested function;
// function xyz(){
//     var x = 3;
//     return function(){
//         return ++x;
//     }
// }
// var nestedFn = xyz();

// console.log(nestedFn());            // 4
// console.log(nestedFn());            // 5


// function buildTicket(transport){
//     var numOfPass = 0;
//     return function(name){
//         return "Hello " + name + ",\nYou are going via " + transport 
//             + "\nYour Ticket ID #"+ (++numOfPass) 
//     }
// }
// var car = buildTicket("Car")
// console.log(car("Foo"));
// console.log(car("Bar"));

// var ship = buildTicket("Ship")
// console.log(ship("Baz"));














// 	Prototypical chain
// Prototype - blueprint for the objects

    // function Person(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    // Person.prototype.sayHello = function(){
    //     return "Hello from " + this.firstName + " " + this.lastName
    // }

    // var foo = new Person("Foo", "Bar")
    // var baz = new Person("Baz", "Bam")
    // console.log(foo.sayHello());
    // console.log(baz.sayHello());

    // var Shoe = {
    //     size : 8
    // }

    // var magicShoe = Object.create(Shoe)

    // // console.log("Magic Shoe : ", magicShoe)
    // // console.log("Size : ", magicShoe.size);            // ?

    // // console.log(magicShoe.hasOwnProperty('size'))
    // // console.log(Shoe.hasOwnProperty('size'))

    // console.log(magicShoe.isPrototypeOf(Shoe))
    // console.log(Shoe.isPrototypeOf(magicShoe))

    // console.log(Object.prototype.isPrototypeOf(Shoe))
    // console.log(Object.prototype.isPrototypeOf(magicShoe))




















    // var str = "Sample String";
    // // var str = new String("Sample String");
    // console.log(str.length);            // 13

    // console.log(str.indexOf('e'))

    // var num = 10
    // // var num = new Number(10); 
    // console.log(num.length);
    // console.log(num.indexOf(0))

// 	Asynchronous programming

// console.log("Start")
// setTimeout(() => {
//     console.log("Timer")
// }, 0)
// Promise.resolve("Promise").then(data => {
//     console.log("Promise : Start")
//     setTimeout(() => {
//         console.log("Promise : Timer")
//     }, 0)
//     console.log("Promise : End")
// })
// console.log("End")

// Start -> End ->  Promise Start -> Promise Timer -> Promise End -> Timer





// function createPromise(arr){
//     var promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(arr.length > 2){
//                 resolve("Promise Resolved")
//             }else{
//                 reject(new Error("Promise Rejected"))
//             }
//         }, 2000)
//     });

//     return promise;
// }

// async function consumePromise(){
//     try{
//         var result = await createPromise([1,2,3])
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }


// function consumePromise(){
//     console.log("Start")
//     createPromise([1,2])
//         .then(response => console.log(response))
//         .catch(err => console.log(err))
//     console.log("End")
// }

// consumePromise();




















// Start -> End -> Timer
// Start -> End -> Promise -> Timer


// Sync Code
// Async Code
    // - MicroTask : Promise, queueMicrotask()
    // - MacroTask : timers, XHR, reading/writing etc















// 	IIFE - Immediately Invoked Function Expression

// var MAGIC_NUMBER = Math.round(Math.random() * 100)


(function (){ 
    // var MY_MAGIC_NUMBER = 1001;
    console.log("IIFE Called");
    // luckyNumber++;
    // console.log("Lucky Number : ", luckyNumber)
})();

// console.log("Magic Number : ", MY_MAGIC_NUMBER)

(function(){
    console.log("Second IIFE")
})();