//treeehouse track slideshow

var i = 0; // Start point
var images = [];
var time = 4000;

// Image List
images[0] = "img/reactLong1.png";
images[1] = "img/webLong.png";
images[2] = "img/jsLong.png";
images[3] = "img/digitalLong.png";
images[4] = "img/wordPressLong.png";
images[5] = "img/dataTrack.png";
images[6] = "img/excell.png";
images[7] = "img/ux.png";


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
