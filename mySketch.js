function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,mouseX/2,240);
	
	
}

function draw() {
	background(255,mouseX/2,240);
	
	// drawingContext.shadowColor=color(0,0,255);
	// drawingContext.shadowBlur=30;
	
	fill(100,mouseX,237)
	noStroke()
  beginShape()	
    vertex(190,126)
	  vertex(190+mouseX/10,465)
	  vertex(594+mouseX/-10,465)
	  vertex(594,126)
	  vertex(391,273)
	  vertex(190,126)
  endShape(close)	
	
	fill(mouseX/2,255,240)
	circle(312,375,70+mouseX)
	circle(458,375,70+mouseX)
	
	
	// fill(0)
	// textSize(30)
	// text(mouseX+","+mouseY,mouseX,mouseY)

	
	// strokeWeight(random(3))
	// stroke(255)
	
	// line(500,500,random(width),random(height))
	// line(mouseX,mouseY,20,20)
	
	// fill(random(50,100),random(100,150),0)
	// triangle(0,0,width/2,height/2,mouseX,mouseY)
	
	// circle(mouseX, mouseY, 20);
}