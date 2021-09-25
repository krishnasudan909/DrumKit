// Button pressed
var arr = document.querySelectorAll(".drum");
let i = 0;
for(i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function()
    {
        var btnObj = this.innerHTML;
        playSound(btnObj);
        showAnimation(btnObj);
       
        });
    }

// Key Pressed
document.addEventListener("keydown",function(event){
        playSound(event.key);
        showAnimation(event.key);
});

// function for both keys and buttons
function playSound(event){
    switch(event){
        case "k":{
            let aud = new Audio('sounds/crash.mp3');
            aud.play();
            break;
        }
        case "r":{
            let aud = new Audio('sounds/kick-bass.mp3');
            aud.play();
            break;
        }
        case "i":{
            let aud = new Audio('sounds/snare.mp3');
            aud.play();
            break;
        }
        case "s":{
            let aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;
        }
        case "h":{
            let aud = new Audio('sounds/tom-2.mp3');
            aud.play();
            break;
        }
        case "n":{
            let aud = new Audio('sounds/tom-3.mp3');
            aud.play();
            break;
        }
        case "a":{
            let aud = new Audio('sounds/tom-4.mp3');
            aud.play();
            break;
        }
        default: {
            alert("⚠️ Wrong Key Pressed! ⚠️");
        }
    }
}
function showAnimation(event){
    var activeKey = document.querySelector("." + event);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
    
}