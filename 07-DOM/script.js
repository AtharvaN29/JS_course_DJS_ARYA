//Intro to DOM

//console.log(document.links[0]);
//returns an array of all the links present in the html page
//here we are accessing the first link via index number

//console.log(document.body.innerHTML);
//returns the whole syntax in the body

/*console.log(document.getElementById('main'));
const main=document.getElementById('main');
main.innerHTML='<h1>Hello from main</h1>'; 
//to change the html */


//DOM ELEMENT RELATIONSHIPS

//get child elements

/*const parent=document.querySelector('.parent');

output=parent.children;//html collection as an array of all selected
output=parent.children[1];
output=parent.children[1].innerText;

parent.children[1].innerText='Child two';

parent.firstElementChild.innerText='child one';
parent.lastElementChild.innerText='child three';

//get parents from child
const child =document.querySelector('.child');
output=child.parentElement;


//sibling element
const secondItem=document.querySelector('.child:nth-child(2)');

output = secondItem;
output= secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color='green';
secondItem.previousElementSibling.innerText='child three';
console.log(output); */



//DOM Node
/*const parent= document.querySelector('.parent');
output= parent.childNodes;
//returns a node list, as compared to this .element returned a HTML list
//comment nodde is also counted along with whitespace which is counted in 'text'

output=parent.childNodes[0].nodeName;
output=parent.childNodes[0].textContent;
output=parent.childNodes[3].outerHTML;

output = parent.firstChild;
output = parent.lastChild;


//parent node
const child= document.querySelector('.child');

output= child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor='#ccc';

//siblings
const secondItem= document.querySelector('.child:nth-child(2)');
output= secondItem.previousSibling;


console.log(output); */