let matriz = [];
let pixelSize = 20;
let size = 64;
let canvasSize = pixelSize * size;

let currentX;
let currentY;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(255);

  for (let i = 0; i < size; i++) {
    matriz[i] = [];
    for (let j = 0; j < size; j++) {
      let pixel = {
        size: pixelSize,
        fill: color(255),
        stroke: color(0),
        lowerLimits: {
          x: i * pixelSize,
          y: j * pixelSize,
        },
        upperLimits: {
          x: (i + 1) * pixelSize,
          y: (j + 1) * pixelSize,
        },
        index: {
          row: i,
          column: j,
        },
      };

      fill(pixel.fill);
      stroke(pixel.stroke);
      rect(pixel.lowerLimits.x, pixel.lowerLimits.y, pixelSize, pixelSize);

      matriz[i][j] = pixel;
    }
  }
}

function draw() {
  if (currentX >= 0 && currentY >= 0) {
    let currentPixel = matriz[currentX][currentY];
    fill(currentPixel.fill);
    stroke(currentPixel.stroke);
    rect(
      currentPixel.lowerLimits.x,
      currentPixel.lowerLimits.y,
      pixelSize,
      pixelSize
    );
  }
}

function mouseDragged(event) {
  console.log(event);
  if (
    (pmouseX >= 0) &&
    (pmouseX < canvasSize) &&
    (pmouseY >= 0) &&
    (pmouseY < canvasSize)
  ) {
    currentX = Math.floor(pmouseX / pixelSize);
    currentY = Math.floor(pmouseY / pixelSize);

    matriz[currentX][currentY].fill = color(255, 0, 0);
  }
}
