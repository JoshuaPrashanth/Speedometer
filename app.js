let needle = document.querySelector(".needle");
let acc = document.querySelector(".accelerator");
let brake = document.querySelector(".brake");
let rise = document.querySelector(".rise");
let low = document.querySelector(".low");
let bsound = document.querySelector(".bsound");

function up(){
    needle.style.cssText = "transform-origin: bottom;transform: rotate(135deg); transition: 8s ease-out;";
}
function down(){
    needle.style.cssText = "transform-origin: bottom;transform: rotate(-135deg); transition: 12s;";
}
function br(){
    needle.style.cssText = "transform: rotate(-135.01deg); transition: 2s;";
}
acc.addEventListener("mousedown", ()=>{
    up();
    low.pause();
    rise.play();
})
acc.addEventListener("mouseup", ()=>{
    down();
    rise.pause();
    low.play();
})

brake.addEventListener("mouseup", ()=>{
    br();
    rise.pause();
    low.pause();
    bsound.play();
})
