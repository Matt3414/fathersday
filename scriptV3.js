let sPressed = false;


function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
    const img = new Image();
    const img2 = new Image();
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerWidth;
    document.onclick = function(){
      const ctx = document.getElementById("canvas").getContext("2d");
      if(sPressed){
        sPressed = false;
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      } else{
        sPressed = true;
        ctx.drawImage(img,(ctx.canvas.width / 2) - 125,50, 250,250);
      }
      
      img2.src = "envlope2.svg"
      img.src = "drawing.svg";

  };
  
    img2.onload = () => {
            ctx.drawImage(img2,(ctx.canvas.width / 2) - 125,200, 250,250);
        
    };
    img.src = "drawing.svg";
    img2.src = "envlope2.svg"
  }
