//Method 1

// window.addEventListener('keydown',(e)=>{
//     const insert = document.getElementById('insert');

//     insert.innerHTML=`
//     <div class="key">
//           ${e.key===' '? 'Space': e.key}
//           <small>e.key</small>
//         </div>

//         <div class="key">
//           ${e.keyCode}
//           <small>e.keyCode</small>
//         </div>

//         <div class="key">
//           ${e.code}
//           <small>e.code</small>
//         </div>
//         `;
    
// });

//MEthod 2
// function showKeyCodes(e){
//   const insert = document.getElementById('insert');
//   insert.innerHTML='';
//   const keyCodes={
//     'e.key':e.key===' '? 'Space' : e.key,
//     'e.keyCode':e.keyCode,
//     'e.code':e.code,
//   };
//   for(let key in keyCodes){
//     const div=document.createElement('div');
//     div.className='key';
//     const small= document.createElement('small');

//     const keyText =document.createTextNode(key);
//     const valueText =document.createTextNode(keyCodes[key]);

//     small.appendChild(keyText);
//     div.appendChild(valueText);
//     div.appendChild(small);
    
//     insert.appendChild(div);
//   }
// }


// window.addEventListener('keydown',showKeyCodes);




//PAge loading & Window Events

// window.onload=function(){ //we wait for the entire page to load before giving JS commands , better way is to write Script tag at the bottom
//   document.querySelector('h1').textContent='Hello world';
// };

// window.addEventListener(
//   'load',
//   ()=>console.log('page loaded')
// );

// window.addEventListener('DOMContentLoaded', ()=> console.log('DOM Loaded')
// );

// console.log('Run me'); 

// document.querySelector('h1').innerText= 'HEllo WOrld';

// window.addEventListener('resize',()=>{
//   document.querySelector('h1').innerText=`Resized to ${window.innerWidth} x ${window.innerHeight}`;
// });

// window.addEventListener('scroll',()=>{
//   console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

//   if(window.scrollY>70){
//     document.body.style.backgroundColor='black';
//     document.body.style.color='white'
//   }
//   else{
//     document.body.style.backgroundColor='white';
//     document.body.style.color='black';
//   }
// });












