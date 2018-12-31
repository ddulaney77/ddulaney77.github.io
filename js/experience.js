//treeehouse track slideshow

var i = 0; // Start point
var images = [];
var time = 3000;

// Image List
images[0] = "img/jsLong.png";
images[1] = "img/reactLong1.png";
images[2] = "img/uxLong.png";
images[3] = "img/webLong.png";
images[4] = "img/wordPressLong.png";
images[5] = "img/digitalLong.png";



// Change Image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
