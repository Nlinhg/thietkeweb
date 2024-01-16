var img = [];
var curimg = 0;

function load_images() {
  for (i = 1; i < 6 ; i++) {
    img[i] = new Image();
    img[i].src = "images/meo" + i + ".jpg";
  }
}

function next() {
  curimg++; 
  if (curimg >= img.length) { 
    curimg = 0; 
  }
  document.getElementById("meo").src = img[curimg].src;
}

function back() {
  curimg--;
  if (curimg < 0) {
    curimg = img.length - 1;
  }
  document.getElementById("meo").src = img[curimg].src;
}