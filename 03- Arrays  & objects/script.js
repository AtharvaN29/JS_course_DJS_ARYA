//array literal
/*const numbers = [12, 45 ,65 ,78];


//array constructor

const fruits = new Array{'apple','orange'};

x = numbers[0];

x = 'my fav fruit is an ${fruits[2]}';

x = numbers.length;

fruits[1]= 'pear';
//arrays are mutable

fruits[fruits.length]='blueberry';
//to add an element at the last position


const arr=[23,56,67,556,67];
console.log(arr);
//shows all the possible array oprations in the console

arr.push(100);
//to add an element at last pos

arr.pop();
//deletes the last element

arr.unshift(99);
//add an element to the start of the array

arr.reverse();

let x;
x = arr.includes(200);
//returns boolean
x= arr.indexOf(23);
//returns -1 if element does not exist

x = arr.slice(1,4);
//stops before 4th index

x = arr.splice(1, 4);
//removes the element from the 1st index to the number of elements after that index i.e 4 more elements


console.log(x);  */


/* let x;
const fruits=['apple','pear','orange'];
const berries=['strawberry','blueberry','raspberry'];

fruits.push(berries); //add one whole array to another
//first three items are the arr1 item and the 4th item is a new array


x = fruits[3][1];

const allFruits = [fruits,berries];
x= allFruits[1][0];
//items in the first arrray at 0 position

x=fruits.concat(berries);


//Spread operator
x = [...fruits, ...berries];
//concats both arrays

//flatten arrays
const arr=[1,2,[3,4],5,6,[7,8]];
//dissolves the nested array into single array
x=arr.flat();

x= Array.isArray('Hello');
//checks if its array or not

const a=1;
const b=2;
const c=3;

x=Array.of(a,b,c);
//creates an array of these const
console.log(x); */



//objects


/*let x;
const person{
    name:'john doe',
    age: 30,
    isAdmin: true,
    address:{
        street: '90 ft rd',
        city: 'mumbai',
        state: 'mH',
    },
    hobbies: ['music','sports'],
};

person.hasChild = true; //add a new property to the object
x= person.name;
x= person['age'];
x= person.address.state;

person.name='jane doe';

person['isAdmin']=false;

person.greet = function{}{
    console.log('hello, my name is ${this.name}');
};  */

/*
const todo = new Object (); // creates an empty obj

todo.id = 1;
todo.name='atharva';
x = todo;

const person={
    address:{
        coords:{
            lat: 44.332,
            lng: 313.42,
        },
    },
};

x=person.address.coords.lat;

const obj1={a:1,b:2};
const obj2={c:3, d:4};

const obj3={...obj1, ...obj2}; //using spread operator to combine values of both objects

const obj4= Object.assign({},obj1); //values get assgined to this obj, same as spread

//syntax for declaring array of objects notice the square brackets
const todos=[
    { id:1, name: 'buy milk'},
    { id:2, name: 'buy grocery'},
    { id:3, name: 'buy choclate'},
];


x = todos;
x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length; //method for the length of an array of objects

x = Object.values(todo);

x = Object.entries(todo); //arrays with key value pairs

x = todo.hasOwnProperty('name'); //returns a boolean if it has that attribute
*/
let x;
const firstName='John';
const lastName='Doe';
const age= 30;

const person ={
    firstName,
    lastName,  //here you dont have to redeclare the variables like firstName: firstName, inside the object , if the name is same then simply write the var name
    age,
};

console.log(x);

//Destructuring
const todo={
    id: 1,
    title: 'take out trash',
};

const {id , title}=todo;

console.log(id);
