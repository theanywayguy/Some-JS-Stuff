function hello(name){
    const head= document.querySelector('h1');
    if(head.innerHTML===`Hello, ${name}!`){
       head.innerHTML=`Goodbye, ${name}!`;
    }
    else{
       head.innerHTML=`Hello, ${name}!`;
    }
 

}
document.addEventListener('DOMContentLoaded',()=>{document.querySelector('form').onsubmit=()=>{
   username=document.querySelector('#name').value;
   
   hello(username);
    return false;
};});