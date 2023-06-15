const canvas1  = document.getElementById("canvas");
function init(){
    //envlope.src = "envlope2.svg";
    
    window.requestAnimationFrame(draw);
}
function draw() {
    let ctx = canvas1;
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    //...drawing code...
    const card  = new Image();
    card.src = "drawing2.png"
    ctx.drawimage(card,120,120);
  }