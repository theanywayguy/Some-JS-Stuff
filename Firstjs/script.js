function hello(){
    const head= document.querySelector('h1');
    if(head.innerHTML==="Hello, World!"){
       head.innerHTML="Goodbye, World!";
    }
    else{
       head.innerHTML="Hello, World!";
    }
 

}