let count=0;

 function countup(){
  count++;
  if(count==10){
    count=0;
  }
 document.querySelector('#counter').innerHTML=`THE COUNT IS ${count}`;
};