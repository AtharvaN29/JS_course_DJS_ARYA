//Syntax for if else
/*if(x==y){
    console.log('x=y');
}
else {
    console.log('x!=y');
}  */


//Switch case
/*const d = new Date{2022,1,10,8,0,0};
const month = d.getMonth();
switch(month){
    case 1:
        console.log('it is january');
        break;
    case 2:
        console.log('It is feb');
        break;
    case 3:
        console.log('It is march');
        break;
    default:
        console.log('no month is in bounds');
}  */



//Truthy & Falsy values

//a string with anything in it is a truthy value
//Falsy values
// - false
// - 0
// - "" or ''(Empty String)
// - null
// - undefined
// - NaN


//Truthy values
// - Everything else that is not falsy
// - true
// -  '0'(0 in a string)
// - '  '(Space in a string)
// - 'false'(false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// || - will assign the first truthy value or the last value
//b= 0 || 20 ;
//returns 20

// && - assign the right side value only if the left is turthy value

// ?? - assign the right side operand when the lft is null or undefined
//c= 10 ?? 20
//returns 10

let b=10;

//long form
if(b){
    b=20;
}

//med form
 b= b && 20;

 //short form

 b &&= 20;