window.localStorage

//todo: NO MAGIC VALUES IN FUNCTIONS!
//TODO: oop? create different classes for the different elements.

const moveArray = []

//setTimeout()

document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (!moveArray.includes(key)){
        moveArray.push(key)
    }
    console.log(key);
    console.log(moveArray);
    changeChar()
});

document.addEventListener('keyup', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (moveArray.includes(key)){
        moveArray.splice(key)
    }
    moveArray.splice(key);
    console.log(key);
    console.log(moveArray);
    changeChar()
});
//backgroundposition Xright
function changeChar(){
    if (moveArray.includes("ArrowRight")){
        document.getElementById("player").style.backgroundImage="url(../img/run.gif)";
        document.getElementById("player").style.transform = "scaleX(1)";
        document.getElementById("layer4").style.backgroundPositionX += "1px";
    }
    else if (moveArray.includes("ArrowLeft")){
        document.getElementById("player").style.transform = "scaleX(-1)";
        document.getElementById("player").style.backgroundImage="url(../img/run.gif)";
    }
    else {
        document.getElementById("player").style.backgroundImage="url(../img/idle.gif)"
    }
}

function moveBack(){
    if (moveArray.includes("ArrowRight")){

    }

}






