const weddingDate =
new Date("July 7, 2026 10:24:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = weddingDate - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))
/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))
/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown")
.innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);

const music =
document.getElementById("bgMusic");

document.getElementById("musicBtn")
.onclick=()=>{

if(music.paused){
music.play();
}else{
music.pause();
}

};
