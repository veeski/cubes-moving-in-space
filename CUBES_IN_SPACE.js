let cubes = [];
let distantStars = [];
let speed = 20; // Initial speed
let originalSpeed = 20; // Store the original speed

let resetButton;

function setup() {
  createCanvas(640, 360, WEBGL);

  // Create cubes
  for (let i = 0; i < 50; i++) {
    cubes.push(createVector(random(-width, width), random(-height, height), random(-2000, 0)));
  }

  // Create distant stars
  for (let i = 0; i < 100; i++) {
    distantStars.push(createVector(random(-width, width), random(-height, height), random(-5000, -2500)));
  }

  // Create reset button with label
  resetButton = createButton('Reset Speed');
  resetButton.position(width - 100, height - 30);
  resetButton.mousePressed(resetSpeed);
}

function draw() {
  background(0);

  // Draw and move distant stars
  for (let star of distantStars) {
    push();
    translate(star.x, star.y, star.z);
    fill(255, 255, 255, 150); // Slightly transparent
    box(5); // Smaller size for distant stars
    pop();

    star.z += speed / 2; // Slower than cubes for parallax effect

    // Reset star position if it gets too close
    if (star.z > 200) {
      star.z = random(-5000, -2500);
      star.x = random(-width, width);
      star.y = random(-height, height);
    }
  }

  // Draw and move cubes
  for (let cube of cubes) {
    push();
    translate(cube.x, cube.y, cube.z);
    fill(255, 255, 255, 50); // More transparent white
    box(50);
    pop();

    cube.z += speed;

    // Reset cube position if it gets too close
    if (cube.z > 200) {
      cube.z = random(-2000, 0);
      cube.x = random(-width, width);
      cube.y = random(-height, height);
    }
  }
}

function mousePressed() {
  speed += 5; // Increase speed with each mouse click
}

function resetSpeed() {
  speed = originalSpeed; // Reset speed to the original value
}
