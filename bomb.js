let inputTextEle=document.getElementById("inputText");
let outputTextEle=document.getElementById("outputText");
let imageEle=document.getElementById("image");
let countdown=10;

let intervalid=setInterval(function(){
    countdown=countdown-1;
    if (countdown>=0){
        outputTextEle.textContent=countdown;
    }
    else{
        clearInterval(intervalid);
        outputTextEle.textContent="BOOM!";
        imageEle.src="bomb blast.jpg";
    }
},1000);

inputTextEle.addEventListener('keydown',function(event){
    let text=inputTextEle.value;
    if ((text==="diffuse" || text==="DIFFUSE") && countdown>0){
        outputTextEle.textContent="You did it!";
        imageEle.src="you did it.png";
        clearInterval(intervalid);
    }
})