var x = Math.round(Math.random());// Tạo ra một số bất kì 0 hoặc 1
document.write ( x + "</p>");
var KT = prompt("Nhâp một trong hai số bất kì là 0 và 1 ");
while (KT!=x){
    var KT = prompt("Nhâp một trong hai số bất kì là 0 và 1 ");
}
document.write("Chúc mừng chúc mừng");
