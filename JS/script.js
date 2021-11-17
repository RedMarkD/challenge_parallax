window.localStorage

//todo: NO MAGIC VALUES IN FUNCTIONS!
//TODO: oop? create different classes for the different elements.

const moveArray = []

const player = document.getElementById("player");
const clouds = document.getElementById("clouds");
const ground = document.getElementById("ground");
const hills = document.getElementById("hills");
const trees = document.getElementById("trees");
let remember = 0;
const funbod = document.body.style

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
console.log(remember)
//backgroundposition Xright
function changeChar(){
    if (moveArray.includes("ArrowRight")){
        player.style.backgroundImage="url(../img/run.gif)";
        player.style.transform = "scaleX(1)";
        remember -= 2;
        moveBack()
    }
    else if (moveArray.includes("ArrowLeft")){
        player.style.transform = "scaleX(-1)";
        player.style.backgroundImage="url(../img/run.gif)";
        remember += 2;
        moveBack()
    }
    else {
        player.style.backgroundImage="url(../img/idle.gif)"
    }
}

function moveBack(){
    clouds.style.backgroundPositionX = remember+"px";
    hills.style.backgroundPositionX = 2*remember+"px";
    trees.style.backgroundPositionX = 3*remember+"px";
    ground.style.backgroundPositionX = 4*remember+"px";
    document.body.style.setProperty("-webkit-transform", "rotate("+remember+"deg)", null);
}





