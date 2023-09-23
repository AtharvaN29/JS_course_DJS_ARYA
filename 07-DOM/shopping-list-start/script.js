

//SINGLE ELEMENTS

/*console.log(document.getElementById('app-title')); //returns the element
console.log(document.getElementById('app-title')); //returns the id

//console.log(document.getElementById('app-title').getAttribute('id'));  //get an id

//Set attribute
//document.getElementById('app-title').title='Shopping List';

//document.getElementById('app-title').setAttribute('class','title'); */
/*const title =document.getElementById('app-title'); 

//Get/change content
console.log(title.textContent);
title.textContent='Hello world';
title.innerText='Hello Again';
title.innerHTML='<strong>SHopping list</strong>';

//change styles
title.style.color='red';
title.style.backgroundColor='black'; //the css attributes are written in camelCasing
title.style.padding='10px';

//document.querySelector() select without any id or class
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem=console.log(document.querySelector('li:nth-child(2)').innerText);
secondItem.innerText='Apple Juice';
const list=document.querySelector('ul');
console.log(lsit); */


//MULTIPLE SELECTORS

/*const listItems=document.querySelectorAll('.items');
console.log(listItems); //retuns a nodelist
//can use high order operation on a node list but not html collection

//listItems.style.color='red';  does not change css of all the elements
//you have to use loop for that

listItems.forEach((item,index)=>{
    item.style.color='red';
    if(index===1){
        item.remove();
    }
    if(index===0){
        item.innerText='Oranges';//just this causes uncertain deletions
        //you have to include the html as well with the help of .innerHTML
        
    }
});  

const listItems2=document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

const listItemsArray=Array.from(listItems2);
//to perform operation you have to convert the return into an array
//cannot read properties of undefined error on insepct element *******

listItemsArray.forEach((item) =>{
    console.log(item.innerText);
}); */


//CREATE AND APPEND ELEMENTS

/*const div = document.createElement('div'); //create memory
div.className='my-element'; //add elements to it
div.id='my-element';
div.setAttribute('title','My Element');

const text= document.createTextNode('HEllo world');
div.appendChild(text); //to put the child inside of the div

//document.body.appendChild(div);  //add element after the body tag

document.querySelector('ul').appendChild(div); */



//function to add a new list item
//quick & dirty method
/*function createListItem(item){
    const li=document.createElement('li');

    li.innerHTML=`${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
    document.querySelector('.items').appendChild(li);
}

//CLean & performant

function createNewItem(item){ //creating elements instead of hardcoding them
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button= createButton('remove-iteem btn-link text-red');
 
    li.appendChild(button);


    document.querySelector('.items').appendChild(li);
}  

function createButton(classes){
    const button= document.createElement('button');
    button.className=classes;

    const icon=createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes){
    const icon=document.createElement('i');
    icon.className=classes;
    return icon;

}

createNewItem('Cheese');
createNewItem('Sauce');   */



//INSERT ELEMENTS TEXT & HTML

//insertAdjacentElement Example
/*
function insertElement(){
    const filter=document.querySelector('.filter');

    const h1=document.createElement('h1');
    h1.textContent='insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin',h1);
}

//insertAdjacentText Example
function insertText(){
    const item=document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin','insertAdjacentText');
}

//insertAdjacentHTML example
function insertHTML(){
    const clearBtn=document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend','<h2>insertAdjacentHTML</h2>');
}

//insertBefore Example
function insertBeforeItem(){
    const ul=document.querySelector('ul');

    const li=document.createElement('li');
    li.textContent='insertBefore';

    const thirdItem= document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
    //call it with the parent's name
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();  */



/*
<!--beforebegin-->
<p>
    <!--beforebegin-->
    foo
    <!--beforebegin-->
    </p>
  <!--beforebegin-->
*/

/*function insertAfter(newEl,existingEl){
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
    //putting new element before the 'nextSibling' which is technically after the selected item 

}

//new element to insert
const.li=document.createElement('li');
li.textContent='insert me after';

//existing element to insert after
const firstItem= document.querySelector('li:first-child');

//our custom function 
insertAfter(li,firstItem);  */



//REPLACING THE ELEMENTS
/*
function replaceFirstItem(){
    const firstItem= document.querySelector('li:first-child');

    const li= document.createElement('li');
    li.textContent='REplaced First';

    firstItem.replaceWith(li); //pass the element inside ()
}

function replaceSecondItem(){
    const secondItem=document.querySelector('li:nth-child(2)');

    secondItem.outerHTML='<li>Replaced SEcond</li>';

}

function repalceAllItems(){
    const lis=document.querySelectorAll('li');

    lis.forEach((item,index) => {
        //item.outerHTML='<li>replace all</li>';
        //item.innerHTML='Replace ALl'; //same as above

        if(index === 1){
            item.innerHTML='second item';
        }
        else{
            item.innerHTML='Replace ALL';
        }
    });

    lis.forEach(
        (item,index)=>(item.outerHTML= index===1 ? '<li>Second ITem</li>' : '<li>ITem</li>')
    );
}

function replaceChildHeading(){
    const header= document.querySelector('header');
    const h1= document.querySelector('header h1');

    const h2= document.createElement('h2');
    h2.id='app-title';
    h2.textContent='Shopping List';
    header.replaceChild(h2,h1);
    

}

replaceFirstItem();
replaceSecondItem();
repalceAllItems();
replaceChildHeading();  */



//REMOVE
/*function removeClearButton(){
    const clearBtn=document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem(){
    const ul= document.querySelector('ul');
    const li= document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber){
    const ul=document.querySelector('ul');
    const li=document.querySelectorAll('li')[itemNumber-1];

    ul.removeChild(li);
    
}

function removeItem3(itemNumber){
    const li=document.querySelectorAll('li')[itemNumber-1];
    li[itemNumber-1].remove();
}

const removeItem4=(itemNumber) => document.querySelectorAll('li')[itemNumber-1].remove();

removeClearButton();
//removeFirstItem();
removeItem(2);
removeItem4(3);  */