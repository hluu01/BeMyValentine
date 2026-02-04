function showOverlay(src){
    const overlay = document.getElementById("overlay");
    const img = document.getElementById("bigGif");
    img.src = src;
    overlay.classList.add("show");
}

function sayYes(){
    showOverlay("images/yesCat.gif");
    confettiHeart();
    setTimeout(confettiHeart, 1000);
}

function sayNo(){
    showOverlay("images/spongebob-squarepants-begging.gif");
}

document.getElementById("overlay").addEventListener("click", ()=>{
    document.getElementById("overlay").classList.remove("show");
});

function confettiHeart(){
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    for(let i=0; i<150; i++){
        const t = Math.random() * Math.PI * 2;

        // Heart parametric formula
        let x = 16 * Math.pow(Math.sin(t),3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);

        // Map to screen coordinates
        x = canvasWidth/2 + x * 18;
        y = canvasHeight/2 - y * 18;

        confetti({
            particleCount:1,
            startVelocity:0,
            spread:0,
            ticks:250,
            origin:{x:x/canvasWidth, y:y/canvasHeight},
            colors:["#ff69b4","#ff1493","#ffb6c1"]
        });
    }
}
