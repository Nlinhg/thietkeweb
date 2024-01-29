function toggleCart() {
  var cartDropdown = document.querySelector('.btn.dropdown-toggle');
  cartDropdown.classList.toggle('show-dropdown');
}
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

function toggleSubmenu(event) {
  event.preventDefault();
  var submenu = document.getElementById("submenu");
  submenu.classList.toggle("show");
}

function tog(event) {
  event.preventDefault();
  var submenu = document.getElementById("sub");
  submenu.classList.toggle("show");
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "40px";
  } else {
    document.getElementById("logo").style.fontSize = "50px";
  }
}
var images = ["anh/banh.jpg", "anh/banh2.jpg", "anh/banh3.jpg", "anh/banh4.jpg", "anh/banh5.jpg","anh/banh6.jpg"]; // Danh sách các đường dẫn ảnh
var currentIndex = 0; 

function load_images() {
    var image = document.getElementById("banh");
    image.src = images[currentIndex]; 

    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex]; 
    }, 2000); 
}

load_images();
