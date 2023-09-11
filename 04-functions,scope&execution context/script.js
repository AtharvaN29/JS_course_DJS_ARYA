/*
function registerUser(user='bot'){ //defualt user is bot
    return user + 'is registered';
}

console.log(registerUser());

//rest params
function sum(...numbers){
    let total=0;
    for(const num of numbers){
        total+=num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6));  //puts these numbers automatically in an array of mnumbers
//you can add unlimited numbers here using the spread operator


//Objects as params
function loginUser(user){
    return 'The user ${user.name} with the id of ${user.id} is logged in';
}

const user={
    id:1,
    name:'john',
};

console.log(loginUser(user)); 


//Arrays as params 
function getRandom(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item= arr[randomIndex];
    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8]); */



//SCOPE

/*const x=100; //global variable, global scope
function run(){
    console.log(window.innerHeight);
    console.log(x,'in function'); //value of x in function
}
run();

function add(){
    const y=50; //local scope
    console.log(y);
}
add(); */


//BLOCK SCOPE
/*const x= 100;
if (true){
    const y=100;
    console.log(x+y);
}
//we use 'let' instead of 'var' because var does not have block scope but let 
//has block scope (global & private)
//cannot access var outside of functions but can be accessed out of if statements & for loops which let cannot(and it shouldnt' for good sake)


for( let i=0;i<=10;i++){
    console.log(i); //i has limited scope, block scope
} */



//FUNCTION SCOPE
/*function first(){
    const x=100;

    fucntion second(){
        const y=200;  
        console.log(x+y);  //acccessing parent vairable inside a child function
    }
    console.log(y); //cannot access child variables outside, --> function scope
    second();
}
first(); */


//DECLARATION & EXECUTION OF FUNCTIONS

//function declaration
/* console.log(addDollarSign(100));
function addDollarSign(value){
    return '$' + value;
}

//function expression
console.log(addPlusSign(200));
const addPlusSign= function (value){
    return '+' +value;
}; */
//you can access a functiondeclaration even before its declared due to hoisting
//but you cannot access a function expression before declaring it

//ARROW FUNCTION

/*const add=(a,b) =>{
    return a + b;
};
//both the function provide the same functionality(add,sub is just for ex)
//this method is used to shorten the syntax

//implicit return
const subtract = ( a,b ) => a-b;

//you dont have to add parenthesis() when you pass only one argument
const double = a => a*2;

// Returning an object
const createObj = () => ({
    name: 'Brad';
})
console.log(createObj());

numbers.forEach(function(n){
    console.log(n);
});

//Arrow function in a callback
numbers.forEach((n) => console.log(n));*/ //similar methods



//immediately invoked function


//if you have 2 js files linked in same html file then declaring the same variable in the 
//global scope of both the filess will give an error


/*(function(){ //this is an IIFE function where the const user has a local scopes
    const user='John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

//iife function passing args
function (name){
    console.log('hello'+ name);
}('Shawn');

function hello(){
    console.log('Hello');
}(); */

/*const getCelsius = (f) => ((f-32)*5)/9;
console.log(getCelsius(50)); 

function minmax(arr){
    const min= Math.min(...arr);
    const max= Math.min(...arr);
    console.log(max);
}

minmax([1,2,3,4]); */

