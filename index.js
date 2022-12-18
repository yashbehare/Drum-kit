//Detecting button press
var numberOfBtn = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfBtn; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function ()
    {
        // alert("Hi, I got clicked");
        // console.log(this.innerHTML);
        // this.style.color = "white";
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
//Detecting keyboard press
document.addEventListener("keypress", function(event){
    // alert("You have pressed a key");
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound( letter )
{
    switch (letter ) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
    
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
    }, 100);
}