function setColor() {
  let color = getRandomColor();
  document.body.style.backgroundColor = color;
  document.getElementById("colorText").innerHTML = color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}