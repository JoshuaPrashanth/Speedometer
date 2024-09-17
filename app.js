let needle = document.querySelector(".needle");
let acc = document.querySelector(".accelerator");
let brake = document.querySelector(".brake");
let rise = document.querySelector(".rise");
let low = document.querySelector(".low");
let bsound = document.querySelector(".bsound");


function up(){
    needle.style.cssText = "transform-origin: bottom;transform: rotate(135deg); transition: 9s ease-out;";
}
function down(){
    needle.style.cssText = "transform-origin: bottom;transform: rotate(-135deg); transition: 10s;";
}
acc.addEventListener("mousedown", ()=>{
    low.pause();
    up();
    rise.play();
})
acc.addEventListener("mouseup", ()=>{
    down();
    rise.pause();
    low.play();
})

brake.addEventListener("mouseup", ()=>{
    bsound.play();
})