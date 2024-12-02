var sandy=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(138,36,36); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  //circle
  stroke(194,98,43) // an RGB color for the circle's border
  fill(42,131,209,200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,sandy,35,35); // center of canvas, 20px dia
  sandy=sandy+1;

  stroke(194,98,43);
  fill(194,98,43);
  ellipse(mouseX,mouseY,50,50);

  fill(500,500,500,500)
  textFont("Times-new roman");
  textSize(50);
  text("Welcome",150,250);

}

function mousepressed() {
  if(sandy>=500){
  }else{
    sandy=sandy+5
  }
}