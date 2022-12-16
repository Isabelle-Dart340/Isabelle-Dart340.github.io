
  
  
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 200);
  fill(240);
  noStroke();
}

function draw() {
  background(219, 219, 215);
  

  push();
  stroke(1);
  fill(232, 232, 100);
 
  
  //first bell
  rotate(radians(30));
  ellipse(190,0,75,85);
  fill(143, 143, 47);
  ellipse(190,35,75,25);
  fill(163, 163, 60);
  ellipse(190,30,15,15);
  
  //second bell
  rotate(radians(-50));
  fill(232, 232, 100);
  ellipse(185,170,75,85);
  fill(143, 143, 47);
  ellipse(185,205,75,25);
  fill(163, 163, 60);
  ellipse(185,200,15,15);
  pop();
  
  //bow
  push();
  stroke(1);
  fill(255, 214, 253);
  rect(155,35,35,35,10);
  rect(205,35,35,35,10);
  rect(185,40,25,25, 10);
  pop();

  
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  };
}

 


