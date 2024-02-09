function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("icon-bar").style.display = "none";
    document.getElementById("banner").style.marginRight = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("icon-bar").style.display = "block";
    document.getElementById("banner").style.marginRight = "0";
  }
  window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("logo").style.fontSize = "40px";
  }
}

var img = [];
var curimg = 0;

function load_images() {
  for (i = 1; i < 8 ; i++) {
    img[i] = new Image();
    img[i].src = "images/anh" + i + ".jpg";
  }
}

function next() {
  curimg++; 
  if (curimg >= img.length) { 
    curimg = 0; 
  }
  document.getElementById("anh").src = img[curimg].src;
}

function back() {
  curimg--;
  if (curimg < 0) {
    curimg = img.length - 1;
  }
  document.getElementById("anh").src = img[curimg].src;
}
window.addEventListener('DOMContentLoaded', function() {
  var progressBars = document.querySelectorAll('.progress');
  
  progressBars.forEach(function(progressBar) {
    var percent = progressBar.getAttribute('data-percent');
    progressBar.style.width = percent;
  });
});

function validateForm() {
  var x;
  x = document.forms["frm_dk"]["txt_name"].value;
  if (x == "") {
      alert("Please enter your name");
      return false;
  }
    var x = document.getElementById("txt_phonenumber").value;
    if (x == "") {
      alert("Please enter your phone number");
      return false;
    }
    if (isNaN(x) || x.length == 0 || x.length > 10) {
      alert("A phone number should have a maximum length of 10. Please re-enter.");
      return false;
    }
}

