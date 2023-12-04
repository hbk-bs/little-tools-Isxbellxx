const saveButton = document.querySelector ('button#save');
const colorInput = document.querySelector('input#color');
console.log(colorInput);

let paintColor = '#ff6347';
colorInput.value = paintColor;
let spaceX = 20, spaceY = 20, diam = 10
var slider;
let sliderValue = 1;

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('sketch');
    noStroke();

    background(225);
    saveButton.addEventListener("click",()=>{
         console.log('clicked');
         save('image.png');
    });
    colorInput.addEventListener("input",()=>{
        console.log(colorInput.value);
        paintColor=colorInput.value;
    });    
 slider = createSlider(0, 255, sliderValue);
 slider.position (850, 100);
 slider.size(400);
   
}

function draw (){
background(slider.value());
    //horizontal row
    for(let x = 20; x < width; x += spaceX){
        //vertical row 
        for(let y = 20; y < height; y += spaceY){
            let d = dist(mouseX, mouseY, x, y);
            if(d < 100){
                fill(paintColor);
                diam = map(d, 0, 100, 50, 1);
            } else {
                fill(255);
                diam = 10;
            }
            ellipse (x, y, diam);

        }
    }
    
}

function mouseDragged(){
    fill(paintColor);
    circle(mouseX, mouseY, 10);
    line(pmouseX, pmouseY, mouseX, mouseY);
    for(let i=0; i<100; i++){
        point(
            mouseX + random(-10, 10),
            mouseY + random(-10, 10));
    
    }


    }


function keyPressed(){
    if(key === 's'){
        save('image.png')
     }
    
}