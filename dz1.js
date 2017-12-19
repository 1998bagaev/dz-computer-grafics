let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var mouse = {
    x: undefined,
    y: undefined
};


let countOfSquare = 100;
let colorArray = ["#99B898", "#FECEA8", "#FF847C", "#E84A5F"];

window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
});

function Square(x, y) {
    this.x = x;
    this.y = y;
ctx.fillStyle = "rgb(255,0,0)"; 
    ctx.fillRect (0, 0, 50, 50); 
      
    ctx.fillStyle = "rgba(200, 0, 200, 0.5)"; 
    ctx.fillRect (30, 30, 50, 50);    

  ctx.fillRect(125,125,100,100);
  ctx.clearRect(145,145,60,60);
  ctx.strokeRect(150,150,50,50);
    
  for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                               Math.floor(255-42.5*j) + ',0)';
      ctx.fillRect(300+j*25,195+i*25,25,25);      
     }
  }
 }; 

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, false);

        
    };

    
        this.x += this.dx;
        this.y += this.dy;

        //Mouse moving
        if (mouse.x - this.x < 50
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50
            && mouse.y - this.y > -50) 


        this.draw();
    }
}

let squareArray = [];

function init() {
    squareArray = [];

    for (let i = 0; i < countOfSquare; i++) {
        let x = Math.random() * (innerWidth);
        let y = Math.random() * (innerHeight);
        

        squareArray.push(new Square(x, y));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < squareArray.length; i++) {
        squareArray[i].update();
    }

}

init();
animate();
