//ways to declare a variable
// var,let,const

let firstName='John';
let lastName='Doe';

console.log(firstName,lastName);

let age=30;
console.log(age);

//naming conventions 
// only letters, numbers, underscores & dollar signs
// cant start with a number
//firstName=camelCase
//first_name= underscore
//FirstName= PascalCase
//firstname= lowercase

//reassigning var
age=31;
console.log(age);

let score;
score=1;
console.log(score);

if(true){
    score=score +1;
}
console.log(score);

const x=100;
//const cant be reassigned

const arr=[1,2,3,4];
arr.push(5);


const person={
    name: 'Brad',
};
person.name='john';
person.email='afja@gmail.com';
console.log(person);

//declare multiple values at once;
let a,b,c;

const d=10,e=20,f=30;

//if you dont assign a value and console it , it is 'undefined'
