const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// line
context.beginPath(); // Start a new line, new path, new shape/drawing/object. "We want to draw something new."

context.moveTo(20, 20); // Starting coordinates (x, y) "Place pen here."
context.lineTo(300, 40); // Ending coordinates. "Move the pen here, while drawing"

context.strokeStyle = "#FF0000"; // Set the color of the pen. "Pen should be red."
context.lineWidth = 5; // Set the size of the pen. "Pen size should be 5px"

context.stroke(); // Finish setting the properties of the path/drawing/shape. "Draw it!"

context.beginPath();

context.moveTo(450, 30);
context.lineTo(450, 100);
context.lineTo(350, 100);

context.closePath(); // draw line that connect starting point to the end point

context.strokeStyle = "#008000"
context.lineWidth = 2;
context.stroke();


// SHAPES

// rectangle
context.fillStyle = "#FF00FF"
context.fillRect(50, 50, 120, 80); // x coordinates, y coordinates, width, height

// circle
context.arc(100, 100, 50, 0, Math.PI * 2, false); // x for center, y for center, radius, start of the circle, end of the circle, direction
context.stroke()

// Erase an area
context.clearRect(20, 20, 100, 150);

context.clearRect(0, 0, 600, 400);
