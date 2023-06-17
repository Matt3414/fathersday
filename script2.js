let i1 = 1;
let sPressed = false;
i = 0;
const img2 = new Image();
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
    const img = new Image();
    //const img2 = new Image();
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerWidth;
    document.onclick = 
    function(){
      
      const ctx = document.getElementById("canvas").getContext("2d");
      if(sPressed){
        //ctx.canvas.width  = window.innerWidth;
        //ctx.canvas.height = window.innerWidth;
        sPressed = false;
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        //ctx.drawImage(img2,ctx.canvas.width / 2, ctx.canvas.height, 50,50);
      } else{
        sPressed = true;
        ctx.drawImage(img,(ctx.canvas.width / 2) - 125,50, 250,250);
      }
      //i1++;
      img2.src = "envlope2.svg"
      img.src = "drawing.svg";
      alert("ran!");
  };
  
    img.onload = () => {
        
            //var mousePos = getMousePos(canvas, evt);
            //const img2 = new Image();
            //ctx.drawImage(img2,ctx.canvas.width / 2, ctx.canvas.width /2, ctx.canvas.width /2,ctx.canvas.width /2);
            //img2.src = "envlope2.svg"
            //ctx.drawImage(img,50,50, 50,50);
            ctx.drawImage(img2,(ctx.canvas.width / 2) - 125,200, 250,250);
        
    };
    img.src = "drawing.svg";
    img2.src = "envlope2.svg"
  }

/*setInterval(function(){
  //const img2 = new Image();

  const ctx = document.getElementById("canvas").getContext("2d");
  if(sPressed){
    i++;
    img2.style.top = i + "px";
   }
   img2.src = "envlope2.svg"
}, 1000/60);
document.onclick = 
  function(){
    alert("ran!");
    const ctx = document.getElementById("canvas").getContext("2d");
    var mousePos = getMousePos(canvas, evt);
    const img2 = new Image();
    ctx.drawImage(img2,ctx.canvas.width / 2, ctx.canvas.width /2, ctx.canvas.width /2,ctx.canvas.width /2);
    img2.src = "envlope2.svg"
  };*/