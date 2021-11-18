window.localStorage

//todo: NO MAGIC VALUES IN FUNCTIONS!
//TODO: oop? create different classes for the different elements.

const moveArray = []
const img = "img/02_trees_and_bushes.png";

const player = document.getElementById("player");
const clouds = document.getElementById("clouds");
const ground = document.getElementById("ground");
const hills = document.getElementById("hills");
const trees = document.getElementById("trees");
const roundground = document.getElementsByClassName("Roundground");
const roundtrees = document.getElementsByClassName("Roundtrees");
const roundhills = document.getElementsByClassName("Roundhills");
const round = document.getElementsByClassName('round')
const container = document.getElementsByClassName('container');
let remember = 0;
let tilt = 0;

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
    if (moveArray.includes("ArrowUp")){
        tilt +=1
        moveBack()
    }
    if (moveArray.includes("ArrowDown")){
        tilt -=1
        moveBack()
    }

    if (moveArray.includes("ArrowRight")){
        player.style.backgroundImage="url(../img/run.gif)";
        player.style.transform = "scaleX(1)";
        remember -= 1;
        moveBack()
    }
    else if (moveArray.includes("ArrowLeft")){
        player.style.transform = "scaleX(-1)";
        player.style.backgroundImage="url(../img/run.gif)";
        remember += 1;
        moveBack()
    }
    else {
        player.style.backgroundImage="url(../img/idle.gif)"
    }
}

function moveBack(){
    //
    // container.forEach(()=>{
    //     document.write("div",'<div id="Roundground"></div>', );

    // })
    // container.forEach(roundtrees=>{
    //     roundtrees.setProperty("-webkit-transform", "rotate("+remember+"deg)", null);
    // })
    // container.forEach(roundhills=>{
    //     roundhills.setProperty("-webkit-transform", "rotate("+0.5*remember+"deg)", null);
    // })

//todo: remove if new version works.
    roundground[0].style.setProperty("-webkit-transform", "rotate("+1.5*remember+"deg)", null);
    roundtrees[0].style.setProperty("-webkit-transform", "rotate("+remember+"deg)", null);
    roundhills[0].style.setProperty("-webkit-transform", "rotate("+0.5*remember+"deg)", null);
    roundground[1].style.setProperty("-webkit-transform", "rotate("+1.5*remember+"deg)", null);
    roundtrees[1].style.setProperty("-webkit-transform", "rotate("+remember+"deg)", null);
    roundhills[1].style.setProperty("-webkit-transform", "rotate("+0.5*remember+"deg)", null);
    // clouds.style.backgroundPositionX = remember+"px";
    // hills.style.backgroundPositionX = 4*remember+"px";
    // trees.style.backgroundPositionX = 6*remember+"px";
    // ground.style.backgroundPositionX = 8*remember+"px";
     //container.style.setProperty("-webkit-transform", "rotate("+remember+"deg)", null);

    //todo: remove whole document turns this way
    document.body.style.setProperty("-webkit-transform", "rotate("+tilt+"deg)", null);
}

//container and overflow hidden. for half circle turn::