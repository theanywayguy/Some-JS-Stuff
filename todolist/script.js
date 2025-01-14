document.addEventListener('DOMContentLoaded',function (){
    //by default,submit button is false
    document.querySelector('#submitbutton').disabled=true;
    document.querySelector('#task').onkeyup=()=>{
        if(document.querySelector('#task').value.length>0)
            {
             document.querySelector('#submitbutton').disabled=false;
            }

        else {document.querySelector('#submitbutton').disabled=true;}
    }
    document.querySelector('form').onsubmit= ()=>{
        const task=document.querySelector('#task').value;   
            const li=document.createElement('li');
            li.innerHTML=task;
            document.querySelector('#Tasks').append(li);
            document.querySelector('#task').value="";   
            document.querySelector('#submitbutton').disabled=true;
        

        //stop form from submit
        return false;
    }
})