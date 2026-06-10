/* ==========================
   COUNTDOWN TIMER
========================== */

const weddingDate =
new Date("July 7, 2026 10:24:00").getTime();

function updateCountdown() {

const now = new Date().getTime();

const distance = weddingDate - now;

if (distance < 0) {

document.getElementById("days").innerHTML = "0";
document.getElementById("hours").innerHTML = "0";
document.getElementById("minutes").innerHTML = "0";
document.getElementById("seconds").innerHTML = "0";

return;
}

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds =
Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ==========================
   MUSIC CONTROL
========================== */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

if(isPlaying){

music.pause();
musicBtn.innerHTML = "🎵";

}else{

music.play();
musicBtn.innerHTML = "🔊";

}

isPlaying = !isPlaying;

});

/* ==========================
   AUTO START MUSIC
========================== */

document.body.addEventListener(
"click",
function(){

if(!isPlaying){

music.play()
.then(()=>{

isPlaying = true;
musicBtn.innerHTML = "🔊";

})
.catch(()=>{});

}

},
{ once:true }
);

/* ==========================
   FADE IN ANIMATION
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

document
.querySelectorAll(".page")
.forEach(section=>{

section.classList.add("hidden");
observer.observe(section);

});

/* ==========================
   FLOWER PETALS
========================== */

const petalsContainer =
document.getElementById("petals-container");

function createPetal(){

const petal =
document.createElement("div");

petal.innerHTML = "🌸";

petal.style.position = "fixed";
petal.style.top = "-50px";

petal.style.left =
Math.random() * window.innerWidth + "px";

petal.style.fontSize =
(Math.random() * 15 + 15) + "px";

petal.style.opacity =
Math.random();

petal.style.zIndex = "999";

petal.style.pointerEvents = "none";

const duration =
Math.random() * 8 + 6;

petal.style.transition =
`transform ${duration}s linear,
 top ${duration}s linear`;

petalsContainer.appendChild(petal);

setTimeout(()=>{

petal.style.top =
window.innerHeight + 100 + "px";

petal.style.transform =
`translateX(${Math.random()*200-100}px)
 rotate(${Math.random()*360}deg)`;

},50);

setTimeout(()=>{

petal.remove();

},duration*1000);

}

setInterval(createPetal,600);

/* ==========================
   GALLERY HOVER EFFECT
========================== */

document
.querySelectorAll(".gallery img")
.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform =
"scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform =
"scale(1)";

});

});

/* ==========================
   SMOOTH PAGE REVEAL
========================== */

const style =
document.createElement("style");

style.innerHTML = `

.hidden{
opacity:0;
transform:translateY(60px);
transition:all 1s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

`;

document.head.appendChild(style);

/* ==========================
   PAGE TITLE ANIMATION
========================== */

document.title =
"Chinmay ❤️ Gauri | Wedding Invitation";
