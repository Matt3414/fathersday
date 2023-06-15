function draw() {
    const ctx = document.getElementById("canvas").getContext("2d");
    const img = new Image();
    const img2 = new Image();
    ctx.canvas.width  = window.innerWidth / 2;
    ctx.canvas.height = window.innerWidth / 2;
    
    img.onload = () => {
        ctx.onclick =  function addEnvlope(){
            var mousePos = getMousePos(canvas, evt);
            //const img2 = new Image();
            ctx.drawImage(img2,ctx.canvas.width / 2, ctx.canvas.width /2, ctx.canvas.width /2,ctx.canvas.width /2);
            //img2.src = "envlope2.svg"
          };
        ctx.drawImage(img,ctx.canvas.width / 2, ctx.canvas.width /2, ctx.canvas.width /2,ctx.canvas.width /2);
        
    };
    img.src = "drawing.svg";
    img2.src = "envlope2.svg"
  }

  