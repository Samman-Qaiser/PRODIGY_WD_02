let min = 0;
let sec = 0;
var  tens = 0;
let interval
var start=document.querySelector(".start")
var stop=document.querySelector(".stop")

const restart = document.querySelector(".restart");

const ten = document.querySelector(".tensec");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
var lap=document.querySelector(".lap")
var reset_lap=document.querySelector(".reset-lap")

function stopwatch() {
    tens++;
    if (tens <= 9) {
        ten.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        ten.innerHTML = tens;
    }
    if (tens > 99) {
        sec++;
        seconds.innerHTML = '0' + sec;
        tens = 0;
        ten.innerHTML = '00';
    }
    if (sec <=9) {
        seconds.innerHTML = '0' + sec;
    } if(sec>9) {
        seconds.innerHTML = sec;
    }
    if (sec > 59) {
        min++;
        minutes.innerHTML = '0' + min;
        sec = 0;
        seconds.innerHTML = '00';
    }
    if (min < 10) {
        minutes.innerHTML = '0' + min;
    } else {
        minutes.innerHTML = min;
    }
}

start.addEventListener("click", function () {
    clearInterval(interval);
    interval = setInterval(stopwatch, 10);
});

stop.addEventListener("click", function () {
    clearInterval(interval);
});

restart.addEventListener("click", function () {
    clearInterval(interval);
    tens = 0;
    sec = 0;
    min = 0;
    ten.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
});
function loader(){
    gsap.from(".loader h1",{
        opacity:0,
        y:-500,
        duration:3
    })
var tl=gsap.timeline({})
tl.to(".loader",{
    borderRadius:"50%",
   delay:5,
   duration:3,
    border:"6px solid #e4a106",
    transform:"scale(0)"
})

}
var counter=0
lap.addEventListener("click",function(){
  
    var ul=document.querySelector(".list")
    var li=document.createElement("li")
    counter++
    li.innerHTML=`<span>${counter}</span>${minutes.innerHTML}:${seconds.innerHTML}:${ten.innerHTML}`
    ul.appendChild(li)
  
})
reset_lap.addEventListener("click",function(){
    var ul=document.querySelector(".list")
    var li=document.querySelectorAll("li")
    li.forEach(function(dets){
     ul.removeChild(dets)
    })
  counter=0
})
loader()