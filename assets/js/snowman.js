const $canvas = document.querySelector('.game-area');
const ctx = $canvas.getContext('2d');

//draw the head (white bg, black border)
function drawHead() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 4;
  const radius = $canvas.width / 4 - 50;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#000000';
  ctx.stroke();
}

//draw the left eye (black bg)
function drawLeftEye() {
  const x = $canvas.width / 5;
  const y = $canvas.height / 8 + 50;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

//draw the right eye (black bg)
function drawRightEye() {
  const x = ($canvas.width / 5) * 2 - 50;
  const y = $canvas.height / 8 + 50;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

//draw the nose (orange bg)
function drawMouth() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 8 + 70;
  const radius = 12;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'orange';
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}

//draw the body
function drawBody() {
  const x = $canvas.width / 2 - 120;
  const y = $canvas.height / 2 + 76;
  const radius = $canvas.width / 4;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#000000';
  ctx.stroke();
}

//draw the first button (black bg)
function drawFB() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 2;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

//draw the second button (black bg)
function drawSB() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 2 + 40;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

//draw the third button (black bg)
function drawTB() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 2 + 80;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

drawHead();
drawLeftEye();
drawRightEye();
drawMouth();
drawBody();
drawFB();
drawSB();
drawTB();
