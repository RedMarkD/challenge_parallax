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
const tilter = document.getElementById("tilter")
const burger = document.getElementById("burger");
let remember = 0;
let tilt = 0;

//setTimeout()

document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (!moveArray.includes(key)){
        moveArray.push(key)
    }
    // console.log(key);
    // console.log(moveArray);
    changeChar()
});
document.addEventListener('keyup', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (moveArray.includes(key)){
        moveArray.splice(key)
    }
    moveArray.splice(key);
    //console.log(key);
    //console.log(moveArray);
    changeChar()
});
//backgroundposition Xright
function changeChar(){
    if (moveArray.includes("ArrowUp")){
        tilt +=1;
        runAll();
    }
    if (moveArray.includes("ArrowDown")){
        tilt -=1;
        runAll();
    }

    if (moveArray.includes("ArrowRight")){
        player.style.backgroundImage="url(../img/run.gif)";
        player.style.transform = "scaleX(1)";
        remember -= 1;
        runAll();
    }
    else if (moveArray.includes("ArrowLeft")){
        player.style.transform = "scaleX(-1)";
        player.style.backgroundImage="url(../img/run.gif)";
        remember += 1;
        runAll();
    }
    else {
        player.style.backgroundImage="url(../img/idle.gif)"
    }
}

function moveBack(){
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
    tilter.style.setProperty("-webkit-transform", "rotate("+tilt+"deg)", null);
}

function moveBurger(){
    burger.style.left = 10*remember+"px";
    // burger.style.top =  (15*remember)+"px";
}

function touch() {

    let d1 = document.getElementById('player').getBoundingClientRect();
    let d2 = document.getElementById('burger').getBoundingClientRect();

    function touching(div1,div2){
        let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width : d1.width);
        let oy= Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height : d1.height);
        return ox && oy;
    }

    let t = touching(d1, d2);
    console.log(t);
    if (t === true)
    {
        let random = Math.ceil(Math.random() * 100);
        console.log("HIT");
        burger.style.left = random + "%";
        t = false;
    }
    else
    {
        console.log("no hit / respawn");
    }

}

function runAll(){
    moveBack();
    moveBurger();
    touch();
}

//container and overflow hidden. for half circle turn::