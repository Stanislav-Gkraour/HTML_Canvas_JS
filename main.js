const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin ='round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;


let isDrawing = false; 
let lastX = 0; // Starting x 
let lastY = 0; // Starting y
let hue = 0;
let direction = true;


function draw(e){
    if(!isDrawing)return; // stops the function from running when they are moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100% , 50%)`; // hue is our variable that equals to 0,  100% saturation and 50% lightness

    // ctx is where we do all of the drawing
    ctx.beginPath();
    // start from 
    ctx.moveTo(lastX, lastY);
    // go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // set variables in one line ES6 trick (destructuring an array)
    [lastX, lastY] = [e.offsetX, e.offsetY] ;

    hue++;

    if(hue >= 360){
        hue = 0;
    }
    if(ctx.lineWidth >= 250 || ctx.lineWidth <= 1){
        direction = !direction; // to flip the direction 
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) =>{        
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY] ;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


