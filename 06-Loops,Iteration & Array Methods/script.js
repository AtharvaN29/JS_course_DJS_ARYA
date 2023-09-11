//For of loop
//array of items
/*const items= ['book','table','kite','chair'];

//array of objects
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'}
];


for (const item of items){
    console.log(item);
}

for (const user of users){
    console.log(user.name);
}

//Loopo ver strings
const str='Hello world';

for(const letter of str){
    console.log(letter);
}  */

/*const colorObj ={
    color1:'red',
    color2:'blue',
    color3:'orange',
    color4:'green',
};

for(const key in colorObj){
    console.log(key,colorObj[key]);
}

const colorArr=]['red','green','blue','yellow'];

for (const color in colorArr){
    console.log(colorArr[key]);
}
*/
//console.log(color); this returns 1,2,3... so you have to add key attribute


//ARRAY FOR EACH  take a function as an argument

const soicals=['Twitter','Linkedin','facebook'];

//console.log(soicals.__proto__);
/*soicals.forEach(function(item){
    console.log(item);
})  */

/*soicals.forEach((item,index,arr) => console.log(`${index}-${item}`,arr));

//soicals.forEach(logSocials);

const socialObjs=[
    {name:'Twitter',url:'https//tfsfsg'},
    {name:'instagram',url:'https//tfsfsg'},
    {name:'Facebook',url:'https//tfsfsg'},
    {name:'Reddit',url:'https//tfsfsg'},
];

socialObjs.forEach((item)=> console.log(item.url)); */



//ARRAY FILTER
//this method returns a value whereas 'for Each' does not

//const numbers=[1,2,3,4,5,6];

/*const evenNumbers= numbers.filter(function(number){
    return number%2===0;
}); //whichever ones pass the condition will be put into a new array

//short version
const eevenNumbers = numbers.filter((number)=> number%2===0); */

//with for each
/*const evenNumbers=[];
numbers.forEach(number=>{
    if(number%2===0){
        evenNumbers.push(number);
    }
});  */

/*const companies=[
    {name:'com 1',category:'fin',start:1981,end:1999},
    {name:'com 2',category:'tech',start:1980,end:2004},
    {name:'com 3',category:'fin',start:1982,end:2003},
    {name:'com 4',category:'buisness',start:1981,end:2006},
    {name:'com 5',category:'stock',start:1985,end:2008},
]

//get only fin companies
const finCompanies= companies.filter((company)=> company.category==='fin');

//console.log(finCompanies);

//get companies in era 1981<x<2005

const earlyCompanies=companies.filter((company)=> company.start >=1982 && company.end <=2005);
console.log(earlyCompanies); */



//ARRAY MAP
/*const numbers=[1,2,3,4,5];

const doubleNumbers=numbers.map((number)=> 'Number'+number);

console.log(doubleNumbers)

//same with for each

const doubleNumbers2=[];

numbers.forEach((number)=>{
    doubleNumbers2.push(number*2);
})

//array of company names
const companyNames= companies.map((company)=>company.name);

//array with just company and category
const companyInfo= companies.map((company)=>{
    return{
        name: company.name,
        category: company.category,
        length: company.end-company.start+'years',
    };
});

//Chain Map method
const squareAndDouble= numbers
    .map((number)=>Math.sqrt(number))
    .map((sqrt)=> sqrt*2);
*/


// Array FILTER

/*const numbers=[1,2,3,4,5,6,7,8,9,10];

const sum=numbers.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0);

//short form
const sum1= numbers.reduce((acc,cur)=> acc+cur,0);

//Using a for loop
const sum3=()=>{
    let acc=0;
    for(const cur of numbers){
        acc=+cur;
    }
    return acc;
};

const cart={
    {id:1,name:'Product 1',price:130},
    {id:2,name:'Product 2',price:330},
    {id:3,name:'Product 3',price:430},
}

const total= cart.reduce(function(acc,product){
    return acc + product.price;
})

console.log(sum3); */