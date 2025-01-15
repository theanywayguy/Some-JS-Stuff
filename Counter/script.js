if(!localStorage.getItem('counter')){
  localStorage.setItem('counter',0);
}

 function countup(){
  let count=localStorage.getItem('counter')
  count++;

 document.querySelector('#counter').innerHTML=`THE COUNT IS ${count}`;
 localStorage.setItem('counter',count);
};
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#counter').innerHTML=`THE COUNT IS ${localStorage.getItem('counter')}`;
  document.querySelector('button').onclick=countup;

 
});