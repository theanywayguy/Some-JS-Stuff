let count=0;

 function countup(){
  count++;
  if(document.querySelector('h3').innerHTML=="10"){
    count=0;
  }
 document.querySelector('h3').innerHTML=count;
};