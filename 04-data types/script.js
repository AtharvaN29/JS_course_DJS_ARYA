/*types of data types primitive
//String, number, boolean, Null, Unidentified, Symbol, BigInt

//reference types 
//objects,literals, arrays, functions

//it is a dynamically typed language
//c, c++ , java are statically typed lang

//String
const firstName='sara';
const output=firstName;
console.log(output, typeof output);

//NUmber
const age=30;
const temp= 98.9;

//Boolean 
const hasKids=true;

//Null
const aptNUmber=null;

//Undefined
let score;

//Symbol
const id=Symbol('id');

//BigInt
const n=235235285235n;

//Primitive Types: Stored directly in the stack, where it is accessed from
const name='john';
const age1=30;
//reference types: stored in heap memory
const person={
    name: 'brad',
    age1: 40,
};

let newName=name;
newName='johnathan';

let newPerson= person;
newPerson.name1='Bradley';

console.log(name1,newName);
console.log(person,newPerson); */

//Type conversion

//let amount ='100';

//COnvert string to number
//amount =parseInt(amount);
//amount =+amount;
//amount= Number(amount);


//COnvert number to String
/*let amount=100;
amount=amount.toString();
amount=String(amount); */

//COnvert string to decimal
/*let amount='99.5';
amount=parseFloat(amount); */

//Convert number to Boolean
/*amount=1;
amount=Boolean(amount);
console.log(amount,typeof amount);*/

//If we convert words(String) to a number then we get an output as 'NaN' not a number

//1.arithmetic operators
/*let x;
x=5+5;
x=5-5;
x=5*5;
x=5/5;
x=7%5; //2 is the remaineder(output)


//Concatenation
x='hello' + 'world';

//Exponenet
x=2 ** 3;

//increment
x=1;
x++;

//Decrement
x--;

//Assignment operators
x=10;
x +=5;
x *=5;

//3.comparison operators

x = 2 == '2'; //output is true '==' does not test the type but only the value
x = 2 ==='2'; //output is false '===' checks the type as well as the value

x = 2 != '2'; //output is false
x = 2 !== '2'; // adding another '=' is like negating the condition

x=10 > 5;
x=10 < 5;
x=10 <= 5;
x=10 >=5;  */



//Type coercion

let x;
x= 5 + '5';
x= 5 + Number('5');
x= 5 * '5';
// here javascript automatically converts the '5' string into a number because
//it notices a multiply operator in between a string and a number

x= 5 + null;
//JS converts this into 0

x=5 + true;
//gets converted into 6, as the value of a true statement is 1
x=5 + false;
//gets convv into 5, as value of false is 0

x=5 + undefined;
//becomes a NaN  



//Strings
let x;
const name ='John';
const age =30;

//concatenation using template literals
x='Hello. my name is ${name} and I am ${age} years old';

//Properties & Methods
const s='hello world';

x= s.length;
//access value by number key
x=s[0];
x=s.__proto__;
//shows the differerent keys availabe when you print x

x= s.toUpperCase;
x= s.toLowerCase;

x= s.charAt(0);
x= s.indexOf('e');

x= s.substring(0,4);
x= s.substring(7);
//from 7 to the end of the string

x= x.trim();
//gets rid of the blank spaces in between

x= s.replace('world','john');

x= s.includes('hello');
//returns true

x = s.valueOf();

x = s.split(' ');
//splits into array of individual words
x= s.split('');
//splits into array of characters, notice that there is no space between the quotes



//working with numbers
let x;
const num= new Number(5.4277);

x= num.toString().length;

x= num.toFixed(2);
//number of digits after the decimal point

x= num.toPrecision(2);
//returns 2 digits in total so, 5.4

x= num.toExponential(2);
// exponential till 2 places

x= num.toLocaleString('en-US');
//changes the character to local character in that country

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
//returns the max & the min value possible in JS



//math object
console.log(Math);
//shows in the console al lthe properties of Math

x = Math.sqrt(9);
x = Math.abs(-5);

x = Math.ceil(4.2);
//round up

x = Math.floor(4.9);
//round donw to 4

x = Math.pow(2,3);

x = Math.min(4,5,3);

x = Math.max( 9,0, 8);

x = Math.random();

let x= Math.random() * 10;
// returns a decimal number between 0-9
// can use math.floor to turn this into a random whole numbers between a specific set



//Dates & time

let d;
 d= new Date();
 console.log(d);
 //return a random date

 d = new Date(2021, 0, 10, 12 ,30 ,0);
 d = new Date('07-10-2022');
 //returns the day & date in string format, put month before date

 d = Date.now();

//in JS timestamps are always in milli seconds


let x;
let d = new Date(); //instantiating a date object in the variable

x= d.getTime();
x= d.valueOf();

x= d.getFullYear();
x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = Intl.DateTimeFormat('en-US').format(d);
//API used to fetch the local date and time
x = Intl.DateTimeFormat('en-US',{month,'long'}).format(d);

console.log(x);











