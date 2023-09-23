

// const clearBtn= document.querySelector('#clear');

// function onClear(){
//     const itemList= document.querySelector('ul');
//     const items=itemList.querySelectorAll('li');

//     //items.forEach((item)=> item.remove());

//     while(itemList.firstChild){
//         itemList.removeChild(itemList.firstChild);
//     }
// }

// //javascript event listener
// // clearBtn.onclick= function(){
// //     alert('Clear Items');
// // };

// // //add EVent listener
// // clearBtn.addEventListener('click',() => alert('Clear Items'));
// // clearBtn.addEventListener('click',() => console.log('Clear Items'));

// clearBtn.addEventListener('click',onClear);

// // setTimeout(()=> clearBtn.removeEventListener('click',onClear),5000);

// // setTimeout(()=> clearBtn.click(),5000);


// const logo=document.querySelector('img');

// const onClick=()=>console.log('click event');
// const onDoubleClick=()=>{
//     if(document.body.style.backgroundColor !=='purple'){
//         document.body.style.backgroundColor !=='purple';
//         document.body.style.color !=='white';
//     }else{
//         document.body.style.backgroundColor !=='white';
//         document.body.style.color !=='black';
//     }
// };

// const onRightClick=()=>console.log('right click event');

// const onMouseDown=()=>console.log('mouse down event');

// const onMouseUp=()=>console.log('mouse up event');

// const onMouseWheel=()=>console.log('mouse wheel event');

// const onMouseOut=()=>console.log('mouse out event');

// const onDragStart=()=>console.log('drag start event');

// const onDragEnd=()=>console.log('drag end event');

// //Event listerners
// logo.addEventListener('click',onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('dragend', onDragEnd);


//EVENT OBJECT

// const logo=document.querySelector('img');

// function onClick(e){
//      console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type); //type of event occured(eg.mouse click)
//     console.log(e.timeStamp); //teruns the time in ms every time it is clicked
//     console.log(e.clientX); // position horizontally 
//     console.log(e.clientX); //position vertically
//     console.log(e.offsetX); //relative to the element marked
//     console.log(e.offsetY);
//     console.log(e.pageX); //relative to the page not the element
//     console.log(e.pageX);
//     console.log(e.screenX);  // realtive to the whole screen
//     console.log(e.screenY);
// }

// logo.addEventListener('click',onClick);

// document.querySelector('a').addEventListener('click',function (e){
//     e.preventDefault();

//     console.log('link was clicked');
// });

// document.body.addEventListener('click',function(){
//     console.log(e.target);  //targets only the clicked part
//     console.log(e.currentTarget); //targets the whole attribute
// })



//KEYBOARD EVENTS
// const itemInput= document.getElementById('item-input');

// const onKeyPress=(e)=>{
//     console.log('keypress');
// };

// const onKeyUp=(e)=>{
//     console.log('keyup');
// };

// const onKeyDown=(e)=>{
//    //key
//    if(e.key==='Enter'){
//     alert('you pressed enter');
//    }

//    //key code
//    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
//    if(e.keyCode===13){  //above link has the codes to all the keys on the keyboard
//     alert('you pressed enter');
//    }

//    // code
//    if(e.code==='Digit1'){
//     console.log('you pressed 1');
//    }

// };





// // itemInput.addEventListener('keypress',onKeyPress);
// // itemInput.addEventListener('keyup',onKeyUp);
// itemInput.addEventListener('keydown',onKeyDown);


//NEW VIDEO

/*
const itemInput=document.getElementById('item-input');
const priorityInput=document.getElementById('priority-input');
const checkbox=document.getElementById('checkbox');
const heading=document.querySelector('h1');

function onInput(e){
    heading.textContent=e.target.value; //appends the input in the terminal
}

function onChecked(e){
    const isChecked=e.target.checked;
    heading.textContent= isChecked?'Checked':'Not Checked';
}
 
function onFocus(){
    console.log('Input is focused');
    itemInput.style.outlineStyle='solid';
    itemInput.style.outlineWidth='1px';
    itemInput.style.outlineColor='green';
}

function onBlur(){
    console.log('Input is not focused');
    itemInput.style.outlineStyle='none';
}

itemInput.addEventListener('input',onInput);
priorityInput.addEventListener('change',onInput);
checkbox.addEventListener('input',onChecked);

itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur); 
*/


//Form vaildation

/*
const form=document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();// prevents the file from submitting and shows it in the console
    //console.log('submit');

    const item=document.getElementById('item-input').value;
    const priority=document.getElementById('priority-input').value;

    if (item==='' || priority==='0'){
        alert('Please fill in all the fields');
        return;
    }

    console.log(item,priority.value);
}

function onSubmit2(e){
    e.preventDefault();

    const formData=new FormData(form);
    
    const item=formData.get('item');
    const priority=formData.get('priority');

    const entries= formData.entries(); //returns and iterator hence for loop is used below
    //console.log(entries);

    for(let entry of entries){
        console.log(entry[1]); //returns an array each iwth 
    //entry[0] returns the title i.e name,priority entry[1] returns the value
    }

    
    //console.log(item,priority);
}

form.addEventListener('submit', onSubmit2);
*/


//Event Bubbling

//the alert messages are going to bubble up till button>div>form
// const button=document.querySelector('form button');
// const div=document.querySelector('form div:nth-child(2)');
// const form= document.querySelector('form');

// button.addEventListener('click',(e)=>{
//     alert('button was clicked');
//     e.stopPropagation();  //stops the bubbling after button
// });

// div.addEventListener('click',()=>{
//     alert('Div was clicked');
// });

// form.addEventListener('click',()=>{
//     alert('Form was clicked');
// });

// document.body.addEventListener('click',()=>{
//     alert('Body was clicked');
// });



//Event delegation & multiple elements
// const listItems=document.querySelectorAll('li');
// const list=document.querySelectorAll('ul');

// listItems.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         e.target.remove();
//     });
// });

// list.addEventListener('click',(e)=>{ //some error is popping in this line list.addEventListener is not a function
//     if(e.target.tagName==='LI'){
//         e.target.remove();
//     }
// });

// list.addEventListener('mouseover',(e)=>{ 
//     if(e.target.tagName==='LI'){
//         e.target.style.color='red';
//     }
// });




