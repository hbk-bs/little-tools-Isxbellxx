function setup() {
    createCanvas(500, 500);
}

function draw (){
    
}

function mouseDragged(){
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