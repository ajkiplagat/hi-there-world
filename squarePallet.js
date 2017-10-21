

var w = 150;  // make width/2 to make four 
var h = 150;
var bar =w*2; //distance between squares 
var tri = 30;
var strClr = 30;
var x = [];
var y = [];

function setup() { 
	createCanvas(1570, 400);
	stroke(strClr);
	strokeWeight(25);
	noLoop();
}

function draw() {

// CODE to draw a mesh using translate 

  for(var i = 0 ; i < width ; i +=bar) {
	 for(var j = 0 ; j < height ; j+=bar) {

		push();
		translate(i,j);
		//rotate(radians(frameCount));
		fill(0);
		drawImage(w, h);
		//drawDetail(w,h);
		drawPoints();
		//drawWheel();
		pop();
	}
  } 

//saveFrames('squarePallet_12','jpg');

}  

function drawImage(x,y) {

//1. top left 

//fill(84,63,107);  // scheme 1
//fill(245,156,138) // scheme 2 
//fill(117,78,104); //scheme 3
fill(72,133,237); // Google colors (blue)
rect(0,0,x,y);
rect(0,0,x*0.8,y*0.8);



//2. top right

//fill(217,161,169) 
fill(245,198,161);
//fill(245,198,161); yellow
//fill(244,194,13); //google
rect(w,0,x,y);
rect(w,0,x*0.5,y*0.5);


//3. bottom left
//fill(148,98,135); 
fill(196,192,194);
//fill(196,192,194); 
//fill(219,50,54); //google
rect(0,h,x,y);
rect(0,h,x*0.5,x*0.5);

//4. bottom right
//fill(227,134,152);
fill(245,231,139);
//fill(245,156,138) 
//fill(60,186,84); //google
rect(w,h,x,y);
rect(w,h,x*0.8,y*0.8);


} 
function drawDetail(x,y){
//First
	stroke(strClr);
	rect(0,0,x*0.4,y*0.4);

	fill(117,78,104); //scheme 3
	rect(0,0,x*0.8,y*0.8);

//Second
	stroke(strClr);
	rect(w,0,x*0.6,y*0.6);
	fill(245,198,161); fdefredsdgh
	rect(w,0,x*0.6,y*0.6);



//Third
	stroke(strClr);
	rect(0,h,x*0.6,y*0.6);
	
	fill(196,192,194); 
	rect(0,h,x*0.6,y*0.6);


//Fourth
	stroke(strClr);
	rect(w,h,x*0.6,y*0.6);
	fill(245,156,138)  
	rect(w,h,x*0.6,y*0.6);

}

function drawPoints() {
  	for( var i = 0 ; i< (width)*150 ; i++) {  // changing limit value adjusts circle #
	 x[i] = random(0,width) ; 
	y[i] = random(0,height) ; 
	}
	
	for( var i = 0 ; i< (x.length -1) ; i++ ) {
	stroke(strClr);
	strokeWeight(1);
	point(x[i],y[i]) 
	}
}


function drawWheel() {
	for(var i = 0; i<width ; i+= 300 ) {

		fill(0); 
		triangle(i, 0,i+bar/2, 0 ,width/2,height/2);                // top
		triangle(i+bar/2, height,i+bar, height, width/2, height/2); // bottom
		triangle(0, i +bar/2, 0 , i+bar, width/2 , height/2);       // left
		triangle(width, i, width, i+bar/2 , width/2, height/2);     // right  	
	
	}
}

